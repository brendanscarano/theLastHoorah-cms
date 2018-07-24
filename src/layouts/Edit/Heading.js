import React from 'react';
import styled from 'styled-components';

const Bold = styled.span`
  font-weight: bold;
`;

const Heading = ({ name }) => (
  <h1>
        Editing:
    {' '}
    <Bold>
      {name}
    </Bold>
  </h1>
);

export default Heading;
