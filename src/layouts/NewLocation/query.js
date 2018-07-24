import gql from 'graphql-tag';

export default placeId => gql`
  query PlaceQuery {
    place(id: "${placeId}") {
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
