import React, { useState, HTMLAttributes } from 'react';

import * as S from './styles';

interface CardSlideProps extends HTMLAttributes<HTMLDivElement> {
  swiped?: boolean;
  handleSwipe?: (state: boolean) => void;
}

const CardSlide: React.FC<CardSlideProps> = ({
  swiped = false,
  children,
  onClick,
  ...rest
}) => {
  const actions = [
    { description: 'Excluir', color: '#FF3D57' },
    { description: 'Editar', color: '#FF9933' },
  ];

  // useEffect(() => {
  //   setTimeout(() => setOpen(true), 1000);
  //   setTimeout(() => setOpen(false), 2000);
  // }, []);

  return (
    <S.Container>
      <S.CardContent
        // @ts-ignore
        onClick={onClick}
        open={swiped}
        actionsQuantity={actions.length}
        {...rest}
      >
        {children}
      </S.CardContent>
      {actions.map((action, index) => (
        <S.OptionsContainer
          actionOrder={index}
          actionsQuantity={actions.length}
          actionColor={action.color}
        >
          <S.ActionButton onClick={() => console.log(action.description)}>
            {action.description}
          </S.ActionButton>
        </S.OptionsContainer>
      ))}
    </S.Container>
  );
};

export default CardSlide;
