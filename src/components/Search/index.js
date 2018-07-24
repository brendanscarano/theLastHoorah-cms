/**
 * Description here...
 */
import React from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';
import { Input, Button } from 'antd';

const StyledInput = styled(Input)`
  width: 300px;
  margin: 1rem 1rem 0 1rem;
`;

const Search = ({ placeId, setPlaceId, setPlaceIdToSearch }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    setPlaceIdToSearch();
  }}
  >
    <label htmlFor="placeId">Place ID:</label>
    <StyledInput
      id="placeId"
      type="text"
      value={placeId}
      onChange={e => setPlaceId(e.target.value)}
    />
    <Button type="primary" htmlType="submit" variant="raised">
      Search
    </Button>
  </form>
);

export default Search;
