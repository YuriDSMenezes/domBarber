import styled from 'styled-components';

interface AppointmentProps {
  theme?: 'dark' | 'light';
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0;
  /* border-bottom: 2px solid #535353; */

  /* &:nth-last-child(1) {
    border-bottom: none;
  } */
`;

export const ContainerDateTime = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #535353;
  padding: 10px 15px;
`;

export const DayText = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
`;

export const MonthText = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
`;

export const DayNumber = styled.span<AppointmentProps>`
  font-weight: 500;
  font-size: 36px;
  line-height: 23px;
  text-align: center;
  color: var(--color-primary);
  margin: 10px 0;
`;

export const Time = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
  text-align: center;
`;

export const ContentAppointmentDescription = styled.div`
  display: flex;
  width: 70%;
`;

export const ContentAppointmentDescriptionInformationContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 8px 15px 15px 10px;
`;

export const ContentAppointmentDescriptionImageContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding-top: 8px;
`;

export const AppointmentDescription = styled.span<AppointmentProps>`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
  margin-bottom: 5px;
`;

export const AppointmentValue = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
`;

export const AppointmentPoints = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
`;

export const AppointmentPaymentStatus = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
  margin-top: 5px;
`;

export const DescriptionImageProfessional = styled.span<AppointmentProps>`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
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

export const ProfessionalName = styled.span<AppointmentProps>`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => (props.theme === 'light' ? '#1c1c1c' : '#fff')};
`;
