import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexRow, FlexColumn } from '../components';
import withLocations from '../shared/withLocations';

const LinksWrapper = styled(FlexColumn)`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    margin-bottom: 1rem;
    border-radius: 2px;
    text-decoration: none;
    width: 100%;
    /* flex: 1 1 300px; */
`;

const Card = styled(FlexRow)`
  display: flex;
  border: 1px solid #D3D3D3;

  > img {
    width: 80px;
    height: 80px;
  }
`;

const Title = styled.h2`
  margin-left: 1rem;
  width: 200px;
`;

const Ratings = styled(FlexRow)`
  flex: 1;
  justify-content: space-around;
`;

const LocationsPage = ({ locations, match }) => console.log('locations', locations) || (
  <div>
    <h2>Select a Location to Edit</h2>

    <LinksWrapper>
      {locations.map(location => (
        <StyledLink key={location.dbId} to={`/edit/${match.params.id}/${location.dbId}`}>
          <Card>
            <img alt={location.name} src={location.imgRef} />
            <FlexRow style={{ width: '100%' }}>
              <Title>{location.name}</Title>
              <Ratings>
                <FlexColumn>
                  <h4>Total Rating</h4>
                  <span>{location.reviews ? location.reviews.aggregateRating : 'n/a'}</span>
                </FlexColumn>
                <FlexColumn>
                  <h4>Google Rating</h4>
                  <span>{location.reviews ? location.reviews.googleRating : 'n/a'}</span>
                </FlexColumn>
                <FlexColumn>
                  <h4>Yelp Rating</h4>
                  <span>{location.reviews ? location.reviews.yelpRating : 'n/a'}</span>
                </FlexColumn>
                <FlexColumn>
                  <h4>Trip Advisor Rating</h4>
                  <span>{location.reviews ? location.reviews.tripAdvisorRating : 'n/a'}</span>
                </FlexColumn>
              </Ratings>
            </FlexRow>
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
