import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #1C1C1C;
  position: relative;
  padding-top: 20%;
`;

export const Form = styled.div`
  background-color: #FFF;
  width: 100%;
  height: 80%;
  border-radius: 46px 46px 0px 0px;
  padding: 39px 44px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 25px;
`;

export const FormTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 20px;
`;

export const IndicativeTextOptionsLogin = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 14px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const ActionsSocialButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  gap: 25px;
  margin-bottom: 48px;
`;

export const RegisterSugestionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;
`;

export const RegisterSugestionText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;
export const RegisterSugestionLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #FF9933;
`;
