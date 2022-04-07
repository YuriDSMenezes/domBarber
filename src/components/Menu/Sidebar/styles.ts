import styled, { css } from 'styled-components';

interface ContainerProps {
  openSidebar?: boolean
}

interface LogoTextProps {
  hasNotification?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 0px;
  height: 100%;
  overflow-y: auto;
  padding:24px;
  position: fixed;
  right: 0;
  z-index: 999;
  transition: 3s ease-in-out;
  background: #272727;

  ${props => props.openSidebar && css`
    width: 220px;
  `}
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

export const ArrowBack = styled.div`
  margin-right: 17px;
  cursor: pointer;
`;

export const Logo = styled.div`
margin-top: 20px;
`;

export const Content = styled.div`
  color: #fff;
`;

export const Item = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 40px 0;
  font-weight: 500;
`;

export const LogoItem = styled.div`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const LogoText = styled.div<LogoTextProps>`
  position: relative;
  ${props => props.hasNotification && css`
      &::after {
      content: '';
      width: 18px;
      height: 18px;
      background: #FF9933;
      border-radius: 50%;
      position: absolute;
      top: 0px;
      right: -50px;
    }
  `}
`;

