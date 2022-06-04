import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  selected?: boolean;
  size?: 'small' | 'large';
}

const TagButton: React.FC<TagButtonProps> = ({
  text,
  selected,
  size,
  onClick,
  ...rest
}) => {
  return (
    <S.Container selected={selected} size={size} onClick={onClick} {...rest}>
      <S.Text size={size}>{text}</S.Text>
    </S.Container>
  );
};

export default TagButton;
