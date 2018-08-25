import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose, withState, lifecycle } from 'recompact';
import { Card } from 'antd';
import firebase from '../firebase';
import withLocations from '../shared/withLocations';

const LinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
`;

const StyledLink = styled(Link)`
    margin-bottom: 1rem;
    border-radius: 2px;
    padding: 1rem;
    text-decoration: none;
    /* flex: 1 1 300px; */
`;

const LocationsPage = ({ locations }) => (
  <div>
    <h2>Select a Location to Edit</h2>

    <LinksWrapper>
      {locations.map(location => console.log('location', location) || (
        <StyledLink key={location.dbId} to={`/edit/${location.city}/${location.dbId}`}>
          <Card cover={<img style={{ minHeight: '200px' }} alt={location.name} src={location.imgRef} />}>
            {location.name}
          </Card>
        </StyledLink>
      ))}
    </LinksWrapper>
  </div>
);

LocationsPage.propTypes = {
  locations: PropTypes.array,
};

LocationsPage.defaultProps = {
  locations: [],
};

export default withLocations(LocationsPage);
