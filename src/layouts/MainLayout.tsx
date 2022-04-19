import Footer from 'components/footer';
import { Menu } from 'components/Menu';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding-top: 56px;
  background: #1c1c1c;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    padding: 100px 60px 0 60px;
    width: 100%;
    height: 100%;
    background: #1c1c1c;
  }
`;

const MainLayout: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>
    <Head>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
              if (!document.cookie || !document.cookie.includes('user-cookie')) {
                window.location.href = "/"
              }
            `,
        }}
      /> */}
    </Head>
    <Content>
      <Menu />
      {children}
    </Content>
    <Footer />
  </Container>
);

export default MainLayout;
