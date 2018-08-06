import React from 'react';
import styled from 'styled-components';
import { LocationForm, Search, Spinner } from '../../components';
import '../../styles/App.css';
import fields from './formFields';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Placeholder = styled.div`
  margin-top: 7rem;
`;

const Presentation = ({
  loading,
  location,
  placeId,
  setPlaceId,
  setPlaceIdToSearch,
  save,
  selectedFilters,
}) => (
  <div className="App">
    <a
      href="https://developers.google.com/places/place-id"
      target="_blank"
      rel="noopener noreferrer"
    >
        Click here to get a Google Place ID
    </a>
    <Search placeId={placeId} setPlaceId={setPlaceId} setPlaceIdToSearch={setPlaceIdToSearch} />
    <i>Example Google Place ID:</i> <b>ChIJldFHseBfwokRO3aZ8NSVW_U</b>

    {location === null && (
      <Placeholder>Input a <b>Google Place ID</b> to see location</Placeholder>
    )}

    {loading && (
      <Spinner />
    )}

    {!loading && location && (
      <Wrapper>
        <LocationForm
          location={location}
          fields={fields}
          handleSubmit={(e) => {
            e.preventDefault();
            save();
          }}
          selectedFilters={selectedFilters}
          buttonText="Save to Firebase"
        />
      </Wrapper>
    )}
  </div>
);

export default Presentation;
