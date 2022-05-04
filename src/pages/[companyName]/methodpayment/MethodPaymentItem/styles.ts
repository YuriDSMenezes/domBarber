import styled from 'styled-components';

interface StyleProps {
  paymentMethod?: 'pix' | 'card' | 'money';
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c4c4c4;
  padding: 0 10px;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PaymentMethodImgContainer = styled.div`
  margin-right: 15px;
`;

export const PaymentMethodNameText = styled.span<StyleProps>`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c1c1c;
`;

export const PaymentMethodTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NumberOfCardText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c1c1c;
`;

export const PaymentActionContainer = styled.div`
  position: absolute;
  right: 0;
`;
