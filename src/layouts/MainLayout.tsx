import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainLayout: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default MainLayout;
