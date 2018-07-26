import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocationForm, Search, Spinner } from '../../components';
import '../../styles/App.css';
import fields from './formFields';

const Wrapper = styled.div`
  padding: 2rem;
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
    <header className="App-header">
      <h1 className="App-title" style={{ color: '#fff' }}>The Last Hoorah CMS</h1>
      <a
        href="https://developers.google.com/places/place-id"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Place ID Search
      </a>
    </header>

    <Link to="/locations">See Locations</Link>
    <Search placeId={placeId} setPlaceId={setPlaceId} setPlaceIdToSearch={setPlaceIdToSearch} />

    {location === null && (
      <div>Input a <b>Google Place ID</b> to see location</div>
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
