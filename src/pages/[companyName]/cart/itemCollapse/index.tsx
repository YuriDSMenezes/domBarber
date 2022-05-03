import { getDay, getHours } from 'date-fns';
import { Professional } from 'models/types/professional';
import { Service } from 'models/types/service';
import * as S from '../styles';

interface ItemCollapseProps {
  professional: Professional;
  service: Service;
  date: Date;
}

export const ItemCollapse = ({
  professional,
  service,
  date,
}: ItemCollapseProps) => {
  const formatedDate = new Date(date);

  return (
    <S.CollapseContainer>
      <S.CollapseDate>
        <S.SmallText>Sexta-Feira, Setembro</S.SmallText>
        <S.CollapseDay>{getDay(formatedDate)}</S.CollapseDay>
        <S.LargeText>{getHours(formatedDate)}:00</S.LargeText>
      </S.CollapseDate>
      <S.CollapseDescription>
        <S.OrangeTitle>{service?.description}</S.OrangeTitle>
        <S.MediumText>R$ {service?.price}</S.MediumText>
        <S.MediumText>{service?.pointsGenerated} Pontos</S.MediumText>
      </S.CollapseDescription>

      <S.CollapseService>
        <S.MediumText>Profissional</S.MediumText>
        <S.CollapseImage>
          <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
        </S.CollapseImage>
        <S.SmallText>{professional?.name}</S.SmallText>
      </S.CollapseService>
      <S.Line />
    </S.CollapseContainer>
  );
};
