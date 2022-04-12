import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: 2px solid #535353;
  & + div {
    margin-top: 8px;
  }
`;
export const KitCardTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
`;

export const PriceAndPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`;
export const PriceText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
export const PointsText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const DescriptionKit = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  width: 40%;
`;

export const ActionButtonContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;
