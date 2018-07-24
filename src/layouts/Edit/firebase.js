import firebase from '../../firebase';

function to(promise) {
  return promise.then(data => [null, data.data()])
    .catch(err => [err]);
}

export const fetchData = async id => to(firebase
  .firestore()
  .collection('nyc')
  .doc('locations')
  .collection('data')
  .doc(id)
  .get());

export const updateData = (id, values) => {
  console.log('updating the data', values);
  const {
    name, description, formattedAddress, imgRef, latitude, longitude, phoneNumber, website, filters,
  } = values;
  return firebase
    .firestore()
    .collection('nyc')
    .doc('locations')
    .collection('data')
    .doc(id)
    .update({
      name,
      description,
      formattedAddress,
      imgRef,
      latitude,
      longitude,
      phoneNumber,
      website,
      filters,
    })
    .then(() => ({ msg: 'Success' }))
    .catch(err => err);
};