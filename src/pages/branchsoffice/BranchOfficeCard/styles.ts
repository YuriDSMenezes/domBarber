import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 196px;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const BrachInformationContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #181818;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const BranchOfficeName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
`;
export const BranchOfficeAddress = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  width: 80%;
  margin-top: 5px;
`;
