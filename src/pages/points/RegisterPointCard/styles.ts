import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #535353;
  border-radius: 11px;
  height: 56px;

  & + div {
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
`;

export const PointContainer = styled.div`
  border-right: 1px solid #717171;
  padding: 0 20px;
`;

export const PointValueText = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

export const PointsText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px;
`;

export const ServiceTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const ServiceDescription = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

export const PercentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
`;

export const PercentText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
