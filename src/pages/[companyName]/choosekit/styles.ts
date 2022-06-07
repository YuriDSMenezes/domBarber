import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  width: 60%;
`;

export const KitsContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 40px;
  overflow-y: scroll;
`;
