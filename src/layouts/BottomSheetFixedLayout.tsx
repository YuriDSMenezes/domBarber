import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface BottomSheetFixedLayoutProps extends HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  mediumSize?: boolean;
  imgSrc?: string;
}

interface StyleProps {
  theme?: 'light' | 'dark';
  mediumSize?: boolean;
  imgSrc?: string;
}

const Container = styled.div<StyleProps>`
  width: 100%;
  height: calc(100vh - 56px);
  background: #1c1c1c;
  position: relative;
  /* padding-top: 40%; */

  ${props =>
    props.imgSrc &&
    `
    background-image: url(${props.imgSrc});
    background-position: top;
    background-repeat: no-repeat;
    background-size: 130%;
  `}
`;

const Content = styled.div<StyleProps>`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 80%;
  border-radius: 46px 46px 0px 0px;
  padding: 20px 15px 0px;
  bottom: 0;

  ${porps =>
    porps.mediumSize &&
    css`
      height: 60%;
    `}

  ${props =>
    props.theme === 'dark' &&
    css`
      background-color: #272727;
    `}
`;

const BottomSheetFixedLayout: React.FC<BottomSheetFixedLayoutProps> = ({
  theme = 'light',
  mediumSize = false,
  imgSrc = '',
  children,
}) => {
  return (
    <Container theme={theme} imgSrc={imgSrc}>
      <Content theme={theme} mediumSize={mediumSize}>
        {children}
      </Content>
    </Container>
  );
};

export default BottomSheetFixedLayout;
