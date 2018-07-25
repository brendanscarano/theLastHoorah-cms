import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = () => (
  <Wrapper>
    <Spin size="large" />
  </Wrapper>
);

export default Spinner;
