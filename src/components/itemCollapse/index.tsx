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
        {/* <S.MediumText>
          {service?.pointsGenerated || product?.pointsGenerated} Pontos
        </S.MediumText> */}
      </S.CollapseDescription>
      {service && (
        <S.CollapseService>
          <S.MediumText>Profissional</S.MediumText>
          <S.CollapseImage>
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
          </S.CollapseImage>
          <S.SmallText>{professional?.name}</S.SmallText>
        </S.CollapseService>
      )}
      <S.Line />
    </S.CollapseContainer>
  );
};
