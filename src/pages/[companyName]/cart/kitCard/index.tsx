import CardSlide from 'components/CardSlide';
import { ItemCollapse } from 'components/itemCollapse';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ArrowDownIcon } from '../../../../../public/assets';
import * as S from './styles';

interface KitCardProps {
  item: any;
  index?: number;
  noCollapse?: boolean;
}

const KitCard = ({ index, item, noCollapse }: KitCardProps) => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  const [openCollapse, setOpenCollapse] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();

  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);

  const editKit = () => {
    push({
      pathname: `/[companyName]/choosekit/edit/[index]`,
      query: { companyName: company?.app?.url, index },
    });
  };

  return (
    <S.ItemContainer>
      <S.Row>
        <S.ItemDescription>
          <S.Column>
            <S.OrangeTitle>{item?.service?.name}</S.OrangeTitle>
            <S.Row>
              {item?.service?.services?.map(service => (
                <S.Row>
                  <S.SmallText>{service?.name}</S.SmallText>
                </S.Row>
              ))}
            </S.Row>
            <S.MediumText>
              Valor total:{' '}
              {currencyFormat({
                value: item?.service.services?.reduce(
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
            {item?.service.services?.map(service => (
              <div
                style={{ textAlign: 'center', width: '90%', margin: '0 auto' }}
              >
                <S.Photo>
                  <img src={service?.professional?.image} />
                </S.Photo>
                <S.SmallText style={{ width: '50px' }}>
                  {service?.professional?.name}
                </S.SmallText>
              </div>
            ))}
          </S.Row>
        </S.ItemPhoto>
        {!noCollapse && (
          <S.Arrow onClick={handleOpenCollapse} direction={openCollapse}>
            <img src={ArrowDownIcon.src} alt="Mostrar serviços deste kit" />
          </S.Arrow>
        )}
      </S.Row>
      {openCollapse &&
        !noCollapse &&
        item?.service.services?.map((service: any, index: number) => (
          <div style={{ marginTop: '20px' }} key={index}>
            <CardSlide
              swiped={selectedIndex === index}
              onClick={() => {
                if (selectedIndex === index) {
                  setSelectedIndex(undefined);
                } else {
                  setSelectedIndex(index);
                }
              }}
              firstAction={() => editKit()}
              secondAction={() => editKit()}
            >
              <ItemCollapse
                professional={service?.professional}
                service={service}
                date={service?.start}
              />
            </CardSlide>
          </div>
        ))}
    </S.ItemContainer>
  );
};

export default KitCard;
