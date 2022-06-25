import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface CardSlideProps extends HTMLAttributes<HTMLDivElement> {
  swiped?: boolean;
  handleSwipe?: (state: boolean) => void;
  firstAction?: (
    props: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  secondAction?: (
    props: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const CardSlide: React.FC<CardSlideProps> = ({
  swiped = false,
  children,
  onClick,
  firstAction,
  secondAction,
}) => {
  const actions = [
    { description: 'Excluir', color: '#FF3D57' },
    { description: 'Editar', color: '#FF9933' },
  ];

  return (
    <S.Container>
      <S.CardContent
        // @ts-ignore
        onClick={onClick}
        open={swiped}
        actionsQuantity={actions.length}
      >
        {children}
      </S.CardContent>
      <S.OptionsContainer
        actionOrder={0}
        actionsQuantity={2}
        actionColor="#FF3D57"
      >
        <S.ActionButton onClick={props => firstAction && firstAction(props)}>
          Excluir
        </S.ActionButton>
      </S.OptionsContainer>
      <S.OptionsContainer
        actionOrder={1}
        actionsQuantity={2}
        actionColor="#FF9933"
      >
        <S.ActionButton onClick={props => secondAction && secondAction(props)}>
          Editar
        </S.ActionButton>
      </S.OptionsContainer>
    </S.Container>
  );
};

export default CardSlide;
