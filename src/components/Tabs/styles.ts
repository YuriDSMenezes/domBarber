import styled, { css } from 'styled-components';

interface StyleProps {
  selectedTab?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
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
`;

export const ContainerTabRenderedComponent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;
