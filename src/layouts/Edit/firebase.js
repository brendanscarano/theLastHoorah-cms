import firebase from '../../firebase';

function to(promise) {
  return promise.then(data => [null, data.data()])
    .catch(err => [err]);
}

export const fetchData = async (cityId, id) => to(firebase
  .firestore()
  .collection(cityId)
  .doc('locations')
  .collection('data')
  .doc(id)
  .get());

export const updateData = (cityId, id, values) => {
  const {
    name, description, formattedAddress, imgRef, latitude, longitude, phoneNumber, website, filters, reviews,
  } = values;
  return firebase
    .firestore()
    .collection(cityId)
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
      reviews,
    })
    .then(() => ({ msg: 'Success' }))
    .catch(err => err);
};
