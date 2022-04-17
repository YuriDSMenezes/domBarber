import { Menu } from 'components/Menu';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 56px 20px 0 20px;
  background: #272727;
  @media (min-width: 768px) {
    padding: 100px 60px 0 60px;
    width: 100%;
    height: 100%;
    background: #1c1c1c;
  }
`;

const MainLayout: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>
    <Menu />
    {children}
  </Container>
);

export default MainLayout;
