import styled, { css } from 'styled-components';

interface StyleProps {
  selected?: boolean;
}

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
`;

export const ServiceTimeText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;
export const ServicePointsText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const ServicePriceText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin-top: 40px;
`;

export const ServiceDescriptionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  width: 60%;
  margin-top: 20px;
`;

export const ChooseOneProfessionalText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-top: 28px;
`;

export const ProfessionalOptions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const ProfessionalOption = styled.div<StyleProps>`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      border: 2px solid #ff9933;
    `}

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
