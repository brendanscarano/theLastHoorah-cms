import gql from 'graphql-tag';

export default gql`
  query PlaceQuery($id: id) {
    place(id: $id) {
      id
      name
      formattedAddress
      latitude
      longitude
      phoneNumber
      rating
      priceLevel
      hours
      photos
      types
      website
    }
  }
`;
