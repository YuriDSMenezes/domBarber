import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  smallSize?: boolean;
  white?: boolean;
  green?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  smallSize = false,
  white = false,
  green = false,
  onClick,
  ...rest
}) => {
  return (
    <S.Container
      green={green}
      white={white}
      smallSize={smallSize}
      onClick={onClick}
      {...rest}
    >
      {text}
    </S.Container>
  );
};

export default Button;
