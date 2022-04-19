import React, { ButtonHTMLAttributes } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import * as S from './styles';

interface SocialConnectionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  socialConnectionType: 'google' | 'facebook' | 'apple';
}

const buttonTypes = {
  google: {
    icon: <FcGoogle size={22} />,
    text: 'Entrar com o google',
  },
  apple: {
    icon: <FaApple size={22} />,
    text: 'Entrar com a apple',
  },
  facebook: {
    icon: <FaFacebook size={22} color="#1977F3" />,
    text: 'Entrar com o facebook',
  },
};

const SocialConnectionActionButton: React.FC<SocialConnectionButtonProps> = ({
  socialConnectionType,
  ...rest
}) => {
  return (
    <S.Container type="button" {...rest}>
      {buttonTypes[socialConnectionType].icon}
      {buttonTypes[socialConnectionType].text}
    </S.Container>
  );
};

export default SocialConnectionActionButton;
