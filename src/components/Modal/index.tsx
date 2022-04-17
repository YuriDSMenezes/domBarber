import { FC } from 'react';
import * as S from './styles';

interface ModalProps {
  show?: boolean;
}

export const Modal: FC<ModalProps> = ({ show, children }) => (
  <S.Container show={show}>
    <S.Content>{children}</S.Content>
  </S.Container>
);
