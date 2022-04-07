import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-around;
  background-color: #272727;
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageUser = styled.div`
  width: 31px;
  height: 31px;
  margin-right: 17px;
  border: 1px solid #FF9933;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    background-size: contain;
  }
`;

interface NotificationProps {
  hasNotification?: boolean
}
export const Notifications = styled.div<NotificationProps>`
  position: relative;
  ${props => props.hasNotification && css `
    &::after {
      content: '';
      width: 6px;
      height: 6px;
      background: #FF3D00;
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
`;
