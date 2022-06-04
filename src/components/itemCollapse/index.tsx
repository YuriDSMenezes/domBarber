import { stringDays } from 'constants/stringDays';
import { stringMonths } from 'constants/stringMonths';
import { currencyFormat } from 'helpers';
import { Product } from 'models/types/product';
import { Professional } from 'models/types/professional';
import { Service } from 'models/types/service';
import * as S from '../../pages/[companyName]/cart/styles';

interface ItemCollapseProps {
  professional: Professional;
  service?: Service;
  product?: Product;
  date: Date;
}

export const ItemCollapse = ({
  professional,
  service,
  product,
  date,
}: ItemCollapseProps) => {
  const formatedDate = new Date(date);
  console.log(professional);
  return (
    <S.CollapseContainer>
      <S.CollapseDate>
        <div>
          <S.SmallText>
            {
              stringDays[
                date
                  ? formatedDate.getDay()
                  : product
                  ? new Date().getDay()
                  : -1
              ]
            }{' '}
            {
              stringMonths[
                date
                  ? formatedDate.getMonth()
                  : product
                  ? new Date().getMonth()
                  : -1
              ]
            }
          </S.SmallText>
          <S.CollapseDay>
            {date
              ? formatedDate.getDate()
              : product
              ? new Date().getDate()
              : ''}
          </S.CollapseDay>
          <S.LargeText>
            {date
              ? formatedDate.toLocaleTimeString('pt-br', { timeStyle: 'short' })
              : product
              ? new Date().toLocaleTimeString('pt-br', { timeStyle: 'short' })
              : ''}
          </S.LargeText>
        </div>
        <div
          style={{ width: '60px', display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              height: '89px',
              width: '1px',
              background: '#ccc',
            }}
          />
        </div>
      </S.CollapseDate>
      <S.CollapseDescription>
        <S.OrangeTitle>
          {service?.description || service?.name || product?.description}
        </S.OrangeTitle>
        <S.MediumText>
          {currencyFormat({
            value:
              Number(service?.price || service?.customPrice) ||
              Number(product?.price),
            currencyPrefix: 'R$',
          })}
        </S.MediumText>
        <S.MediumText>{service?.pointsGenerated} Pontos</S.MediumText>
      </S.CollapseDescription>
      {service && (
        <S.CollapseService>
          <S.MediumText>Profissional</S.MediumText>
          <S.CollapseImage>
            <img src={professional?.image} />
          </S.CollapseImage>
          <S.SmallText>{professional?.name}</S.SmallText>
        </S.CollapseService>
      )}
      <S.Line />
    </S.CollapseContainer>
  );
};
