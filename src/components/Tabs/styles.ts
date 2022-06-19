import { ConvertToRem } from 'helpers';
import styled, { css } from 'styled-components';

interface StyleProps {
  selectedTab?: boolean;
  show?: boolean;
}

export const Container = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  @media (min-width: 768px) {
    position: absolute;
    top: -80px;
  }
`;

export const TabContainer = styled.div<StyleProps>`
  position: relative;
  border: none;
  cursor: pointer;
  ${props =>
    props.selectedTab &&
    css`
      border-bottom: 2px solid #ff9933;
    `}
`;

export const TabText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: ${ConvertToRem(18)};
  }
`;

export const ContainerTabRenderedComponentDesktop = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ContainerTabRenderedComponentMobile = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  display: block;
  overflow-y: scroll;
  @media (min-width: 768px) {
    display: none;
  }
`;
