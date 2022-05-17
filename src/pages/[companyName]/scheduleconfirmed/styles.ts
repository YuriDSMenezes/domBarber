import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 20px 10px;
`;

export const ContainerImgConfirmation = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`;

export const MessageText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  width: 90%;
`;

export const AppointmentsContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 220px;
  overflow-y: auto;
  margin: 10px 0;
`;

export const TotalAppointmentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TotalText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;
export const TotalValue = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
`;

export const QuestionUserText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;
