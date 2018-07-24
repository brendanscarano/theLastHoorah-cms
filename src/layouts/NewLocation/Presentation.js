import React from 'react';
import { Link } from 'react-router-dom';
import { LocationForm, Search } from '../../components';
import '../../styles/App.css';
import fields from './formFields';

const Presentation = ({
  data,
  placeId,
  setPlaceId,
  save,
  selectedPhoto,
  setSelectedPhoto,
}) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title" style={{ color: '#fff' }}>Search Google for Places</h1>
      <a
        href="https://developers.google.com/places/place-id"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Place ID Search
      </a>
    </header>

    <Link to="/locations">See Locations</Link>
    <Search placeId={placeId} setPlaceId={setPlaceId} />

    {data === null && (
      <div>Input a Place ID to see data!</div>
    )}

    {data && (
      <LocationForm
        location={data}
        fields={fields}
        handleSubmit={() => save(data)}
        selectedFilters={[]}
        buttonText="Save to Firebase"
      />
    )}
  </div>
);

export default Presentation;
