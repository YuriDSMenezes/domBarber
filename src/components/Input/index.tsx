import { SearchIcon } from '../../../public/assets';
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
      {search ? <S.SearchInput> <img src={SearchIcon.src} alt='Ícone de pesquisa' width='100%' height='100%'/> </S.SearchInput> : null}
        <S.TextInput secondary={secondary} {...rest} />
      </S.Container>
    </>
  );
};

export default Input;
