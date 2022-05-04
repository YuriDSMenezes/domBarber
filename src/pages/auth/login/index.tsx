import React from 'react';
import { NextPage } from 'next';

import Input from 'components/Input';
import SocialConnectionActionButton from 'components/SocialConnectionActionButton';
import Button from 'components/Button';
import SEO from 'components/SEO';
import { LogoBlackIcon } from '../../../../public/assets';
import * as S from './styles';
import { LoginController } from './login.controller';

const Login: NextPage = () => {
  const {
    actions: {
      handleEmail,
      handlePassword,
      handleLoginWithGoogle,
      handleLoginWithFacebook,
      handleLoginWithEmail,
    },
  } = LoginController();

  return (
    <S.Container>
      <SEO title="Login" />
      <S.Form onSubmit={handleLoginWithEmail}>
        <S.Content>
          <S.LogoContainer>
            <img
              src={LogoBlackIcon.src}
              alt="Logotipo da Dom Barber"
              width="100%"
              height="100%"
            />
          </S.LogoContainer>
          <S.FormTitle>Login</S.FormTitle>
          <Input label="E-mail" onChange={handleEmail} />
          <Input label="Senha" onChange={handlePassword} />
          <S.IndicativeTextOptionsLogin>ou</S.IndicativeTextOptionsLogin>
          <S.ActionsSocialButtons>
            <SocialConnectionActionButton
              socialConnectionType="google"
              onClick={handleLoginWithGoogle}
            />
            <SocialConnectionActionButton
              socialConnectionType="facebook"
              onClick={handleLoginWithFacebook}
            />
          </S.ActionsSocialButtons>
          <Button text="Continuar" onClick={handleLoginWithEmail} />
          <S.RegisterSuggestionContainer>
            <S.RegisterSuggestionText>
              Não tem Cadastro?
            </S.RegisterSuggestionText>
            <S.RegisterSuggestionLink href="#">
              Cadastre-se
            </S.RegisterSuggestionLink>
          </S.RegisterSuggestionContainer>
        </S.Content>
      </S.Form>
    </S.Container>
  );
};

export default Login;
