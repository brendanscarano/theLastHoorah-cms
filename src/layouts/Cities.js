import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import citiesData from '../tmpData/cities';
import theme from '../shared/theme';

const { Meta } = Card;

const LinksWrapper = styled.div`
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;

    > * {
        width: 50%;
    }

    @media(min-width: ${theme.bp.tablet}) {
        > * {
            width: 33%;
        }
    }

    @media(min-width: ${theme.bp.desktop}) {
        > * {
            width: 25%;
        }
    }
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
`;

const CitiesPage = () => (
  <div>
    <h2>Select a city to edit location there</h2>
    <LinksWrapper>
      {citiesData.map(city => (
        <StyledLink key={city.key} to={`/locations/${city.key}`}>
          <Card
            cover={<img alt={city.key} src={city.img} />}
          >
            <Meta title={city.name} />
          </Card>
        </StyledLink>
      ))}
    </LinksWrapper>
  </div>
);

export default CitiesPage;
