import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface BottomSheetFixedLayoutProps extends HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  mediumSize?: boolean;
  imgSrc?: string;
  padding?: string;
}

interface StyleProps {
  theme?: 'light' | 'dark';
  mediumSize?: boolean;
  imgSrc?: string;
  padding?: string;
}

const Container = styled.div<StyleProps>`
  width: 100%;
  height: calc(100vh - 56px);
  background: #1c1c1c;
  position: relative;

  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

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
  height: 90vh;
  border-radius: 46px 46px 0px 0px;
  padding: 20px 15px 0px;
  bottom: -170px;

  @media (min-width: 768px) {
    position: initial;
    height: 880px;
    width: 50%;
    margin: 0 auto 20px auto;
    text-align: center;
    border-radius: 22px;
    background-color: #161616;
    padding: ${props => props.padding};
  }

  ${porps => porps.mediumSize && css``}

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
  padding,
  children,
}) => {
  return (
    <Container theme={theme} imgSrc={imgSrc}>
      <Content theme={theme} mediumSize={mediumSize} padding={padding}>
        {children}
      </Content>
    </Container>
  );
};

export default BottomSheetFixedLayout;
