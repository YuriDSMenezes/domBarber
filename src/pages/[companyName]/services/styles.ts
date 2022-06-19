import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Content = styled.div`
  position: relative;
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
  display: block;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ServiceInformationContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  background: #181818;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const ServiceDescription = styled.div``;
export const ServiceTime = styled.div``;
export const ServicePoints = styled.div``;
export const ServicePrice = styled.div``;
export const SignMoney = styled.div``;
export const Price = styled.div``;

export const ServiceName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
`;
export const ServiceRatingContainer = styled.div``;
