import gql from 'graphql-tag';

// id: Google Place ID
export default gql`
  query PlaceQuery($id: String) {
    place(id: $id) {
      id
      name
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
