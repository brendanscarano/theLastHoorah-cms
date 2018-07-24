import React from 'react';
import styled from 'styled-components';

const Bold = styled.span`
  font-weight: bold;
`;

const ErrorField = ({ locationId }) => (
  <div>
        Whoops - looks like something went wrong!
        Check the
    <Bold>
            id:
      {' '}
      {locationId}
    </Bold>
        in the url
  </div>
);

export default ErrorField;
