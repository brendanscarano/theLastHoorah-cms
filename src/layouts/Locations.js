import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { compose, withState, lifecycle } from 'recompact';
import { Card } from 'antd';
import firebase from '../firebase';

const Container = styled.div`
    padding: 1rem;
`;

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

const enhance = compose(
  withState('locations', 'setLocations', []),
  lifecycle({
    async componentDidMount() {
      const querySnapshot = await
      firebase
        .firestore()
        .collection('nyc')
        .doc('locations')
        .collection('data')
        .get()
        .then(querySnapshot => querySnapshot);

      const locations = querySnapshot.docs.map(doc => ({
        dbId: doc.id,
        ...doc.data(),
      }));
      this.props.setLocations(locations);
    },
  }),
);
const LocationsPage = ({ locations }) => (
  <Container>
    <Link to="/">
Home
    </Link>
    <h1>
Select a Location to Edit
    </h1>

    <LinksWrapper>
      {locations.map(location => (
        <StyledLink key={location.dbId} to={`/edit/${location.dbId}`}>
          <Card cover={<img style={{ minHeight: '200px' }} alt={location.name} src={location.imgRef} />}>
            {location.name}
          </Card>
        </StyledLink>
      ))}
    </LinksWrapper>
  </Container>
);

LocationsPage.propTypes = {
  locations: PropTypes.array,
};

LocationsPage.defaultProps = {
  locations: [],
};

export default enhance(LocationsPage);
