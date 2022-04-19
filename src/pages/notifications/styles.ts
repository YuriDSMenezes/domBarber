import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

export const NotificationsContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NotificationsNotExists = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageNotificationsNotExists = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  width: 60%;
  margin-top: 10px;
`;

export const NotificationNotExistsImgContainer = styled.div``;
