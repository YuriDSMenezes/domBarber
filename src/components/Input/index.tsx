import { SearchIcon } from 'assets';
import Image from 'next/image'
import React, {InputHTMLAttributes} from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  search?: boolean
  secondary?: boolean
}

const Input: React.FC<InputProps> = ({ label, search, secondary, ...rest }) => {
  return (
    <>
      <S.Container secondary={secondary}>
      {label ? <S.LabelText>{label}</S.LabelText> : null}
      {search ? <S.SearchInput> <Image src={SearchIcon} alt='Ícone de pesquisa'/> </S.SearchInput> : null}
        <S.TextInput secondary={secondary} {...rest} />
      </S.Container>
    </>
  );
};

export default Input;
