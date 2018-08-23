import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompact';
import { reduxForm, reset, clearFields } from 'redux-form';
import { Query } from 'react-apollo';
import { Modal } from 'antd';
import { loadData } from '../../redux/location';
import firebase from '../../firebase';
import Presentation from './Presentation';
import query from './query';
import '../../styles/App.css';

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const enhance = compose(
  connect(
    state => ({
      initialValues: state.location.data,
      formValues: state.form.newLocation && state.form.newLocation.values,
    }), { loadData, reset, clearFields },
  ),
  withState('placeId', 'setPlaceId', ''),
  withState('placeIdToSearch', 'setPlaceIdToSearch', ''),
  withState('isModalOpen', 'setModalOpen', false),
  withHandlers({
    // eslint-disable-next-line
    fireSuccessModal: ({ formValues, reset, clearFields }) => () => {
      Modal.success({
        title: 'Success',
        content: (
          <div>
            <p>{formValues.name} saved to database</p>
            <p>Check it out on {' '}
              <a
                href={`https://the-lash-hoorah.firebaseapp.com/city/${formValues.city}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Last Hoorah: {formValues.city}
              </a>
            </p>
          </div>
        ),
        onOk() {
          reset('newLocation');
        },
      });
    },
    fireErrorModal: () => () => {
      Modal.error({
        title: 'Error',
        content: 'Something went wrong',
        onOk() { console.log('closing modal...'); },
      });
    },
  }),
  withHandlers({
    setPlaceIdToSearch: ({ placeId, setPlaceIdToSearch }) => () => {
      setPlaceIdToSearch(placeId);
    },
    save: ({ formValues, fireSuccessModal, fireErrorModal }) => async () => {
      const dataCopy = { ...formValues };
      delete dataCopy.photos;
      const key = dataCopy.name.toLowerCase().replace(/ /g, '');

      try {
        await db
          .collection(formValues.city)
          .doc('locations')
          .collection('data')
          .doc(key)
          .set(dataCopy);
        fireSuccessModal();
      } catch (err) {
        fireErrorModal();
      }
    },
  }),
  reduxForm({
    form: 'newLocation',
    enableReinitialize: true,
  }),
);
const App = ({
  placeId,
  setPlaceId,
  placeIdToSearch,
  setPlaceIdToSearch,
  save,
  loadData,
  formValues,
  isModalOpen,
}) => (
  <Query query={query} variables={{ id: placeIdToSearch }}>
    {({ data, loading }) => {
      console.log('data', data);
      if (data && data.place) {
        loadData(data.place);
      }

      return (
        <Presentation
          loading={loading}
          location={data && data.place ? data.place : null}
          placeId={placeId}
          setPlaceId={setPlaceId}
          setPlaceIdToSearch={setPlaceIdToSearch}
          save={save}
          selectedFilters={(formValues && formValues.filters) || []}
          isModalOpen={isModalOpen}
        />
      );
    }}
  </Query>
);

export default enhance(App);
