import { Menu } from 'components/Menu';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 56px;
  margin: 0 16px;
`;

const MainLayout: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>
    <Menu />
    {children}
    </Container>
);

export default MainLayout;
