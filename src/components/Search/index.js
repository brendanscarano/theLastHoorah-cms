/**
 * Description here...
 */
import React from 'react';
// import PropTypes from "prop-types";
// import styled from "styled-components";
import { Button } from '@material-ui/core';

const Search = ({ search, placeId, setPlaceId }) => (
  <form onSubmit={search}>
    <label htmlFor="placeId">Place ID:</label>
    <input
      id="placeId"
      type="text"
      value={placeId}
      onChange={e => setPlaceId(e.target.value)}
    />
    <Button type="submit" variant="raised">
            Search
    </Button>
  </form>
);

export default Search;
