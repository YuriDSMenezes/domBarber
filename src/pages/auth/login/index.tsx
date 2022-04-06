import React from 'react';
import Image from 'next/image';
import Input from '../../../components/Input';
import Logo from '../../../assets/logo.svg';
import * as S from './styles';
import SocialConnectionActionButton from '../../../components/SocialConnectionActionButton';
import Button from '../../../components/Button';

const login: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <S.LogoContainer>
          <Image src={Logo} alt="Logotipo da Dombarber" />
        </S.LogoContainer>
        <S.FormTitle>Cadastre-se</S.FormTitle>
        <Input label="E-mail" />
        <S.IndicativeTextOptionsLogin>ou</S.IndicativeTextOptionsLogin>
        <S.ActionsSocialButtons>
          <SocialConnectionActionButton socialConnectionType='google' />
          <SocialConnectionActionButton socialConnectionType='facebook' />
        </S.ActionsSocialButtons>
        <Button text="Continuar" />
        <S.RegisterSugestionContainer>
          <S.RegisterSugestionText>Não tem Cadastro?</S.RegisterSugestionText>
          <S.RegisterSugestionLink href='#'>Cadastre-se</S.RegisterSugestionLink>
        </S.RegisterSugestionContainer>
      </S.Form>
    </S.Container>
  );
}

export default login;
