import { compose, withState, lifecycle } from 'recompact';
import firebase from '../firebase';

export default compose(
  withState('locations', 'setLocations', []),
  lifecycle({
    async componentDidMount() {
      const querySnapshot = await
      firebase
        .firestore()
        .collection(this.props.match.params.id)
        .doc('locations')
        .collection('data')
        .get()
        .then(querySnapshot => querySnapshot);

      const locations = querySnapshot.docs.map(doc => ({
        dbId: doc.id,
        ...doc.data(),
      }));
      this.props.setLocations(locations);
    },
  }),
);
