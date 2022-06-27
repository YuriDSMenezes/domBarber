import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useGlobal, useCart } from 'hooks';

import Button from 'components/Button';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import * as S from './styles';

// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

interface CarouselProps {
  services: Array<Service>;
  size: 'lg' | 'md' | 'sm';
}

export const CarouselService: React.FC<CarouselProps> = ({
  services,
  size,
}) => {
  const { push } = useRouter();
  const { addServiceNoCheckProfessional } = useCart();
  const {
    states: { company },
  } = useGlobal();

  const handleClickCard = (service: Service) => {
    addServiceNoCheckProfessional(service);
    push({
      pathname: `/[companyName]/chooseprofessional`,
      query: { companyName: company?.app?.url, serviceId: service.id },
    });
  };

  return (
    <Splide
      options={{
        pagination: false,
        slideFocus: true,
        focus: 'center',
        snap: true,
        gap: 20,
        perPage: services.length,
        breakpoints: {
          500: {
            perPage: 3,
          },
          1250: {
            perPage: 4,
          },
        },
        type: 'loop',
      }}
    >
      {services?.map((service: Service, index: number) => (
        <SplideSlide key={index}>
          <S.Item
            size={size}
            srcImage={service.images && service?.images[0]?.url}
            className="service"
            onClick={() => handleClickCard(service)}
          >
            {services ? (
              <>
                <S.BlurContainer
                  srcImage={service.images && service?.images[0]?.url}
                />
                <S.Texts className="showText">
                  <p>{service.description}</p>
                  <span>{` ${service.description}`}</span>
                </S.Texts>
                <S.ButtonContainer className="showButton">
                  <Button smallSize text="Agendar" />
                </S.ButtonContainer>
              </>
            ) : (
              <S.Description>{service.description}</S.Description>
            )}
          </S.Item>
        </SplideSlide>
      ))}
    </Splide>
  );
};
