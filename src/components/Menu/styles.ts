import styled, { css } from 'styled-components';

interface ContainerProps {
  openSidebar?: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 56px;
  display: flex;
  justify-content: space-around;
  background-color: #272727;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  @media (min-width: 768px) {
    background: #1c1c1c;
    border-bottom: 1px solid #000000;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageUser = styled.div`
  width: 31px;
  height: 31px;
  margin-right: 17px;
  border: 1px solid #ff9933;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    background-size: contain;
  }
`;

interface NotificationProps {
  hasNotification?: boolean;
}
export const Notifications = styled.div<NotificationProps>`
  position: relative;
  ${props =>
    props.hasNotification &&
    css`
      &::after {
        content: '';
        width: 6px;
        height: 6px;
        background: #ff3d00;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        right: 0;
      }
    `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
