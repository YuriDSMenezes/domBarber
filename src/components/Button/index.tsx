import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  smallSize?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  smallSize = false,
  ...rest
}) => {
  return (
    <S.Container smallSize={smallSize} {...rest}>
      {text}
    </S.Container>
  );
};

export default Button;
