import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;

  > a {
    color: #fefefe;
  }

  > a:hover {
    color: #d3d3d3;
  }
`;

const FlexHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`;

const WithNavBarLayout = ({ children }) => (
  <Layout className="layout">
    <FlexHeader theme="light">
      <Title className="logo">
        <Link to="/">
          <span role="img" aria-label="construction-worker-emoji">👷</span>‍ The Last Hoorah: Builder
        </Link>
      </Title>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/locations">Cities</Link></Menu.Item>
      </Menu>
    </FlexHeader>
    <Content style={{ padding: '25px' }}>
      {children}
    </Content>
  </Layout>
);

export default WithNavBarLayout;
