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
  width: 47%;
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
  height: 30%;
  width: 100%;
  background: #181818;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: #fff;
`;
export const ServiceDescription = styled.div``;
export const ServiceTime = styled.div``;
export const ServicePoints = styled.div`
  font-size: 12px;
`;
export const ServicePrice = styled.div`
  flex: 1;
  text-align: right;
`;
export const SignMoney = styled.div`
  font-size: 12px;
  margin: 10px 10px 0 10px;
`;
export const Price = styled.div`
  font-size: 16px;
`;

export const ServiceName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 30px;
  color: #ffffff;
`;
export const ServiceRatingContainer = styled.div``;
