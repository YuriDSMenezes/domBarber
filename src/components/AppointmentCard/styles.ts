import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 2px solid #535353;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;

export const ContainerDateTime = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #535353;
  padding: 10px 15px;
`;

export const DayText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`;

export const MonthText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`;

export const DayNumber = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
`;

export const Time = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
`;

export const ContentAppointmentDescription = styled.div`
  display: flex;
  width: 70%;
  padding: 0px 14px;
`;

export const ContentAppointmentDescriptionInformationContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const ContentAppointmentDescriptionImageContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const AppointmentDescription = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const AppointmentValue = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

export const AppointmentPoints = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

export const AppointmentPaymentStatus = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 5px;
`;

export const DescriptionImageProfessional = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
`;

export const ProfessionalImage = styled.div`
  width: 49px;
  height: 49px;

  img {
    width: 49px;
    border-radius: 11px;
    height: 49px;
    object-fit: cover;
  }
`;

export const ProfessionalName = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
`;
