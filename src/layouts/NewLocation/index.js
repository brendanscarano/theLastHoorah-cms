import React from 'react';
import { compose, withHandlers, withState } from 'recompact';
import { reduxForm } from 'redux-form';
import { Query } from 'react-apollo';
import firebase from '../../firebase';
import Presentation from './Presentation';
import query from './query';
import '../../styles/App.css';

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const enhance = compose(
  withState('placeId', 'setPlaceId', ''),
  withState('placeIdToSearch', 'setPlaceIdToSearch', ''),
  withState('selectedPhoto', 'setSelectedPhoto', ''),
  withHandlers({
    setPlaceIdToSearch: ({ placeId, setPlaceIdToSearch }) => () => {
      setPlaceIdToSearch(placeId);
    },
    save: ({ selectedPhoto }) => (data) => {
      const dataCopy = { ...data };
      dataCopy.imgRef = selectedPhoto;
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
  selectedPhoto,
  setSelectedPhoto,
}) => console.log('placeIdToSearch', placeIdToSearch) || (
  <Query query={query(placeIdToSearch)}>
    {({ data }) => (
      <Presentation
        data={data && data.place ? data.place : null}
        placeId={placeId}
        setPlaceId={setPlaceId}
        setPlaceIdToSearch={setPlaceIdToSearch}
        save={save}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    )}
  </Query>
);

export default enhance(App);
