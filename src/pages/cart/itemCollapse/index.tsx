import * as S from '../styles';

export const ItemCollapse = () => (
  <S.CollapseContainer>
    <S.CollapseDate>
      <S.SmallText>Sexta-Feira, Fevereiro</S.SmallText>
      <S.OrangeTitle>12</S.OrangeTitle>
      <S.LargeText>09:00</S.LargeText>
    </S.CollapseDate>

    <S.CollapseDescription>
      <S.OrangeTitle>Cortes Simples</S.OrangeTitle>
      <S.MediumText>R$ 19,90</S.MediumText>
      <S.MediumText>20 Pontos</S.MediumText>
    </S.CollapseDescription>

    <S.CollapseService>
      <S.MediumText>Profissional</S.MediumText>
      <S.CollapseImage>
        <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
      </S.CollapseImage>
      <S.SmallText>Paulo R.</S.SmallText>
    </S.CollapseService>
    <S.Line />
  </S.CollapseContainer>
);
