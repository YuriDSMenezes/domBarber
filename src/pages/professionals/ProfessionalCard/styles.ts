import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 196px;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const ProfessionalInformationContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  background: #181818;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ProfessionalName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
`;
export const ProfessionalRatingContainer = styled.div``;