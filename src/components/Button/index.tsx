import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  smallSize?: boolean;
  white?: boolean;
  green?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  smallSize = false,
  white = false,
  green = false,
  ...rest
}) => {
  return (
    <S.Container green={green} white={white} smallSize={smallSize} {...rest}>
      {text}
    </S.Container>
  );
};

export default Button;
