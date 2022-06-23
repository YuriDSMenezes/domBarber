import { useState } from 'react';
import { ArrowDownIcon } from '../../../../../public/assets';
import * as S from './styles';

const Paid = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);

  return (
    <S.Container>
      <S.Command>
        <S.Check />
        <S.Date>
          <S.DateText>Data</S.DateText>
          <S.DayWeekly>Sexta-feira</S.DayWeekly>
          <S.DayMonth>12 de fevereiro</S.DayMonth>
        </S.Date>
        <S.Services>
          <S.ServiceText>Serviço / Produto</S.ServiceText>
          <S.Service>Barba + Cabelo</S.Service>
          <S.Service>Barba + Cabelo</S.Service>
        </S.Services>
        <S.Value>
          <S.ValueText>Valor</S.ValueText>
          <S.Price>39,00</S.Price>
        </S.Value>
        <S.Arrow onClick={handleOpenCollapse} direction={openCollapse}>
          <img src={ArrowDownIcon.src} alt="Mostrar serviços deste kit" />
        </S.Arrow>
      </S.Command>
    </S.Container>
  );
};

export default Paid;
