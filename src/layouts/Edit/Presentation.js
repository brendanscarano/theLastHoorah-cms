import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocationForm } from '../../components';
import Heading from './Heading';
import Error from './Error';
// import FIELDS from '../../shared/formFields';

const Container = styled.div`
    padding: 1rem;
`;

const Presentation = ({
  locationId, isLoading, location, handleSubmit, selectedFilters, showModal,
}) => (
  <Container>
    {/* {showModal && (
      success(locationId)
    )} */}
    <Link to="/locations">Back</Link>
    <Heading name={locationId} />

    {!isLoading && !location && (
      <Error locationId={locationId} />
    )}

    {location && (
      <LocationForm
        location={location}
        handleSubmit={handleSubmit}
        selectedFilters={selectedFilters}
      />
    )}
  </Container>
);

export default Presentation;
