import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const ViewMoreLink = styled.a`
  margin-top: 5px;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  text-decoration-line: underline;
  color: #ffffff;
`;

export const ProfessionalDescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  width: 60%;
  margin-top: 20px;
`;

export const ChooseOneEspecialityText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-top: 28px;
`;

export const EspecialityOptionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
