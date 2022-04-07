import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { NextPage } from 'next'

import Input from 'components/Input';
import { LogoIcon } from 'assets';
import SocialConnectionActionButton from 'components/SocialConnectionActionButton';
import Button from 'components/Button';
import SEO from 'components/SEO'


const login: NextPage = () => {
  return (
    <S.Container>
      <SEO title='teste'/>
      <S.Form>
        <S.LogoContainer>
          <Image src={LogoIcon} alt="Logotipo da Dombarber" />
        </S.LogoContainer>
        <S.FormTitle>Cadastre-se</S.FormTitle>
        <Input label="E-mail" />
        <S.IndicativeTextOptionsLogin>ou</S.IndicativeTextOptionsLogin>
        <S.ActionsSocialButtons>
          <SocialConnectionActionButton socialConnectionType='google' />
          <SocialConnectionActionButton socialConnectionType='facebook' />
        </S.ActionsSocialButtons>
        <Button text="Continuar" />
        <S.RegisterSuggestionContainer>
          <S.RegisterSuggestionText>Não tem Cadastro?</S.RegisterSuggestionText>
          <S.RegisterSuggestionLink href='#'>Cadastre-se</S.RegisterSuggestionLink>
        </S.RegisterSuggestionContainer>
      </S.Form>
    </S.Container>
  );
}

export default login;
