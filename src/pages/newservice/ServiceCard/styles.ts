import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  display: flex;
  border-radius: 10px;
  background: #181818;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 30%;
  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  }
`;
export const InformationContainer = styled.div`
  position: relative;
  width: 70%;
  padding: 10px 20px 10px 10px;
`;

export const TitleAndPriceText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const ServiceTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ff9933;
`;
export const ServicePrice = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  position: relative;

  &::before {
    content: 'R$';
    font-size: 12px;
    position: absolute;
    top: 0;
    left: -15px;
  }
`;
export const AddressText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  width: 60%;
  margin-bottom: 10px;
`;
export const TimeAndPointsText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
`;
