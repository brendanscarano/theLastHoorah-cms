import gql from 'graphql-tag';

export default gql`
  query PlaceQuery($id: String) {
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
      reviews {
        aggregateRating
        googleRating
        yelpRating
        yelpNumberOfReviews
        yelpUrl
        tripAdvisorRating
        tripAdvisorNumberOfReviews
        tripAdvisorUrl
      }
    }
  }
`;
