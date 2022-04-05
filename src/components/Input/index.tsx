import React, {InputHTMLAttributes} from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <>
      {label ? <S.LabelText>{label}</S.LabelText> : null}
      <S.Container>
        <S.TextInput {...rest} />
      </S.Container>
    </>
  );
}

export default Input;
