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
  withState('selectedPhoto', 'setSelectedPhoto', ''),
  withHandlers({
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
  save,
  selectedPhoto,
  setSelectedPhoto,
}) => (
  <Query query={query(placeId)}>
    {props => console.log('props', props) || (
      <Presentation
        data={props.data && props.data.place ? props.data.place : null}
        placeId={placeId}
        setPlaceId={setPlaceId}
        save={save}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    )}
  </Query>
);

export default enhance(App);
