import React from 'react';
import Input from '../../../components/Input';

import * as S from './styles';

const login: React.FC = () => {
  return (
    <S.Container>
      <Input label="E-mail" />
    </S.Container>
  );
}

export default login;
