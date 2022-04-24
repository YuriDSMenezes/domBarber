import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background: #1c1c1c;
  border-radius: 7px;
  padding: 20px;

  & + div {
    margin-top: 20px;
  }
`;

export const NotificationImgContainer = styled.div`
  border-radius: 7px;
  max-height: 271px;
  width: 100%;
  height: 100%;

  img {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
  }
`;

export const NotificationInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotificationTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 10px;
`;
export const NotificationDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
export const NotificationObs = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
