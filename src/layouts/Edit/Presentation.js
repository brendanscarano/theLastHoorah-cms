import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import { Button } from 'antd';
import { FlexRow, LocationForm } from '../../components';
import Heading from './Heading';
import Error from './Error';
import editFormFields from './formFields';
import queryReviews from './queryReviews';

const Container = styled.div`
    padding: 1rem;
`;

const StyledFlexRow = styled(FlexRow)`
  align-items: flex-start;
`;

const Presentation = ({
  locationId, isLoading, location, handleSubmit, selectedFilters, change, showModal,
}) => (
  <ApolloConsumer>
    {client => (
      <Container>
        {/* {showModal && (
      success(locationId)
    )} */}
        <Link to="/locations">Back</Link>
        <Heading name={locationId} />

        {!isLoading && !location && (
          <Error locationId={locationId} />
        )}

        <StyledFlexRow>
          {location && (
            <LocationForm
              location={location}
              fields={editFormFields}
              handleSubmit={handleSubmit}
              selectedFilters={selectedFilters}
            />
          )}
          <div>

            <Button onClick={async () => {
              try {
                const { data } = await client.query({
                  query: queryReviews,
                  variables: { id: location.id },
                });
                console.log('data', data);
                change('reviews', data.place.reviews);
              } catch (err) {
                console.log('err', err);
              }
            }}
            >
              Fetch Reviews
            </Button>

          </div>
        </StyledFlexRow>
      </Container>
    )}
  </ApolloConsumer>
);

export default Presentation;
