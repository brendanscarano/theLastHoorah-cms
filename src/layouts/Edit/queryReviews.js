import gql from 'graphql-tag';

export default gql`
  query PlaceQuery($id: String) {
    place(id: $id) {
      id
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
