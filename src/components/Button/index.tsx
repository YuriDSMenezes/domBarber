import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  smallSize?: boolean;
  green?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  smallSize = false,
  green = false,
  ...rest
}) => {
  return (
    <S.Container smallSize={smallSize} green={green} {...rest}>
      {text}
    </S.Container>
  );
};

export default Button;
