import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #1c1c1c;
  position: relative;
  padding-top: 20%;
  @media (min-width: 768px) {
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 46px 46px 0px 0px;
  padding: 39px 44px 0px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 600px;
  @media (min-width: 768px) {
    position: relative;
    justify-content: center;
    width: 700px;
    margin: 0 auto;
    border-radius: 22px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 65%;
    margin: 0 auto;
  }
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
  flex-direction: column;
  gap: 25px;
  margin-bottom: 48px;
`;

export const RegisterSuggestionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;
`;

export const RegisterSuggestionText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;
export const RegisterSuggestionLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #ff9933;
`;
