import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  justify-content: space-between;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

export const Content = styled.div`
  position: relative;
  min-height: 196px;
  width: 48%;
  height: 175px;
  border-radius: 10px;
  cursor: pointer;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const ServiceInformationContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  background: #181818;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: #fff;
`;

export const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ServiceTime = styled.div`
  font-size: 12px;
`;
export const ServicePoints = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;
export const ServicePrice = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
export const SignMoney = styled.div`
  font-size: 12px;
  align-self: flex-start;
  margin-left: -5px;
`;
export const Price = styled.div`
  font-size: 16px;
`;

export const ServiceName = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 5px 0 7px 0;
  color: #ffffff;
`;

export const ServiceRatingContainer = styled.div``;
