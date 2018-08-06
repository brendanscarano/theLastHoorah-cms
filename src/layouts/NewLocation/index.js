import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompact';
import { reduxForm } from 'redux-form';
import { Query } from 'react-apollo';
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
    }), { loadData },
  ),
  withState('placeId', 'setPlaceId', ''),
  withState('placeIdToSearch', 'setPlaceIdToSearch', ''),
  withHandlers({
    setPlaceIdToSearch: ({ placeId, setPlaceIdToSearch }) => () => {
      setPlaceIdToSearch(placeId);
    },
    save: ({ formValues }) => () => {
      const dataCopy = { ...formValues };
      delete dataCopy.photos;
      const key = dataCopy.name.toLowerCase().replace(/ /g, '');

      db
        .collection('nyc')
        .doc('locations')
        .collection('data')
        .doc(key)
        .set(dataCopy);
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
}) => (
  <Query query={query} variables={{ id: placeIdToSearch }}>
    {({ data, loading }) => {
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
        />
      );
    }}
  </Query>
);

export default enhance(App);
