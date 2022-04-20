import { ConvertToRem } from 'helpers';
import styled, { css } from 'styled-components';

interface ContainerProps {
  openSidebar?: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: #1c1c1c;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0px;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 768px) {
    height: 81px;
    border-bottom: 1px solid #000;
  }
`;

export const UserInfos = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
  display: none;
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
    background-size: cover;
    border-radius: 50%;
  }
`;

interface NotificationProps {
  hasNotification?: boolean;
}
export const Notifications = styled.div<NotificationProps>`
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
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
  height: 100%;
  width: 140px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 180px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemsMenuDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    p {
      color: #fff;
      font-weight: 400;
      font-size: ${ConvertToRem(18)};
      margin: 0 30px;
    }
  }
`;

export const ItemsListMenuDesktop = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLoginDesktop = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  a:nth-child(2) {
    color: black;
    background-color: #ff9933;
    border-radius: 13px;
    padding: 2px 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarImage = styled.div`
  width: 25px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
