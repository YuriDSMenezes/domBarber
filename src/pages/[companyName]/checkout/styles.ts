import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #272727;
  margin-bottom: 40px;
`;

export const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeatailPaymentContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContainerRow = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    border-top: 2px solid #c4c4c4;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ServiceTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c1c1c;
  margin-bottom: 5px;
`;

export const ServicePoints = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #1c1c1c;
`;

export const ServicePriceText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #1c1c1c;
`;

export const PointsTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c1c1c;
`;

export const PaymentMethodTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c1c1c;
`;

export const ActionChangePaymentMethod = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #34ed91;
`;

export const DiscountTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #bbbbbb;
`;

export const TotalTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c1c1c;
`;
