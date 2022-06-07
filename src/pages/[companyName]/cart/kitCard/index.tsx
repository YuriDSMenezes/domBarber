import { ItemCollapse } from 'components/itemCollapse';
import { currencyFormat } from 'helpers';
import { Kit } from 'models/types/kit';
import { useState } from 'react';
import { ArrowDownIcon } from '../../../../../public/assets';
import * as S from './styles';

export const KitCard = (item: any) => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);

  const { name } = item?.kit.service;
  const { services } = item?.kit?.service;

  return (
    <S.ItemContainer>
      <S.Row>
        <S.ItemDescription>
          <S.Column>
            <S.OrangeTitle>{name}</S.OrangeTitle>
            <S.Row>
              {services.map(service => (
                <S.Row>
                  <S.SmallText>{service.name}</S.SmallText>
                </S.Row>
              ))}
            </S.Row>
            <S.MediumText>
              Valor total:{' '}
              {currencyFormat({
                value: services.reduce(
                  (prev, curr) => prev + curr.customPrice,
                  0,
                ),
                currencyPrefix: 'R$',
              })}
            </S.MediumText>
          </S.Column>
        </S.ItemDescription>
        <S.ItemPhoto>
          <S.MediumText>Profissionais</S.MediumText>
          <S.Row>
            {services.map(service => (
              <div>
                <S.Photo>
                  <img src={service?.professional?.image} />
                </S.Photo>
                <S.SmallText>{service?.professional?.name}</S.SmallText>
              </div>
            ))}
          </S.Row>
        </S.ItemPhoto>
        <S.Arrow onClick={handleOpenCollapse} direction={openCollapse}>
          <img src={ArrowDownIcon.src} alt="Ícone de abrir colapse" />
        </S.Arrow>
      </S.Row>
      {!openCollapse && <S.Line />}
      {openCollapse && (
        <>
          {services.map(service => (
            <ItemCollapse
              professional={service?.professional}
              service={service}
              date={service?.start}
            />
          ))}
        </>
      )}
    </S.ItemContainer>
  );
};
