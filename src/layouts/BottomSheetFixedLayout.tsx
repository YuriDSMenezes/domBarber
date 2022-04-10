import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface BottomSheetFixedLayoutProps extends HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
}

interface StyleProps {
  theme?: 'light' | 'dark';
}

const Container = styled.div<StyleProps>`
  width: 100%;
  height: 100vh;
  background: #1c1c1c;
  position: relative;
  padding-top: 40%;
`;

const Content = styled.div<StyleProps>`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 46px 46px 0px 0px;
  padding: 20px 24px 0px;

  ${props =>
    props.theme === 'dark' &&
    css`
      background-color: #272727;
    `}
`;

const BottomSheetFixedLayout: React.FC<BottomSheetFixedLayoutProps> = ({
  theme = 'light',
  children,
}) => {
  return (
    <Container theme={theme}>
      <Content theme={theme}>{children}</Content>
    </Container>
  );
};

export default BottomSheetFixedLayout;
