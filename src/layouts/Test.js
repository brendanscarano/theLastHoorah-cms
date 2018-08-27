/**
* Description here...
*/
import React from 'react';
import { compose, withHandlers } from 'recompact';
import { Button } from 'antd';
import { ApolloConsumer } from 'react-apollo';
import withLocations from '../shared/withLocations';
import QUERY_REVIEWS from './Edit/queryReviews';

const enhance = compose(
  withLocations,
//   withHandlers({
  // updateReviews: props => () => {
  //   console.log('props', props);
  //   const firstTest = props.locations[1];
  // },
//   }),
);
const TestLayout = ({ locations }) => (
  <ApolloConsumer>
    {client => (
      <React.Fragment>
        <h1>Testing Page</h1>
        <Button
          onClick={async () => {
            console.log('locations', locations);
            const testArray = locations.slice(0, 4);
            console.log('testArray', testArray);

            const fetchAllReviews = testArray.map(async (location) => {
              try {
                const { data } = await client.query({
                  query: QUERY_REVIEWS,
                  variables: { id: location.id },
                });
                return data;
              } catch (err) {
                return err;
              }
            });

            const finalValues = await Promise.all(fetchAllReviews);
            console.log('finalValues', finalValues);
          }}
        >
            Update Reviews
        </Button>
      </React.Fragment>
    )}
  </ApolloConsumer>
);

export default enhance(TestLayout);
