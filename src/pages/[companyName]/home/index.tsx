import { Carousel } from 'components/Carousel';
import { HorizontalList } from 'components/HorizontalList';
import Input from 'components/Input';
import MainLayout from 'layouts/MainLayout';
import { NextPage } from 'next';
import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import { CarouselService } from 'components/CarouselServices';
import { RightIcon } from '../../../../public/assets';
import * as S from './styles';
import { useAppController } from './home.controller';

const Home: NextPage = () => {
  const { states: globalStates } = useGlobal();
  useAppController();
  const {
    states: {
      company: { name: companyName },
    },
  } = useGlobal();
  const { push } = useRouter();

  return (
    <MainLayout>
      <S.Container>
        <S.TitleContainer>
          <S.Title>Seja Bem-Vindo,</S.Title>
          <S.TitleDescription>
            Conheça nossa barbearia e o que oferecemos para você!
          </S.TitleDescription>
        </S.TitleContainer>
        <S.InputContainer>
          <Input search secondary />
        </S.InputContainer>
        <S.BannerContainer
          bannerUrl={globalStates.company?.image?.cover?.desktop}
        />
        <S.HorizontalListContainer>
          <HorizontalList />
        </S.HorizontalListContainer>
        <S.ServiceContainer>
          <S.Description>Serviços</S.Description>
          <CarouselService
            items={globalStates.services.map(service => ({
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              image: service?.images[0]?.url,
              title: service.name,
              description: service.description,
            }))}
            size="lg"
            services
          />
          <S.SeeMore
            onClick={() =>
              push({
                pathname: `/[companyName]/newservice`,
                query: { companyName },
              })
            }
          >
            <p>Ver Todos</p>
            <img
              src={RightIcon.src}
              alt="Ícone ver mais"
              width="100%"
              height="100%"
            />
          </S.SeeMore>
        </S.ServiceContainer>
        <S.Professional>
          <S.Description>Profissionais</S.Description>
          <Carousel
            items={globalStates.professionals
              .filter(prof => !prof.deletedAt)
              .map(professional => ({
                image: professional?.image,
                title: professional.name,
                description: '',
              }))}
            size="sm"
          />
          <S.SeeMore>
            <p>Ver Todos</p>
            <img
              src={RightIcon.src}
              alt="Ícone ver mais"
              width="100%"
              height="100%"
            />
          </S.SeeMore>
        </S.Professional>
        <S.Products>
          <S.Description>Produtos</S.Description>
          <Carousel
            items={globalStates.products.map(product => ({
              image: product?.images[0]?.url,
              title: product.name,
              description: product?.description,
            }))}
            size="md"
          />
          <S.SeeMore>
            <p>Ver Todos</p>
            <img
              src={RightIcon.src}
              alt="Ícone ver mais"
              width="100%"
              height="100%"
            />
          </S.SeeMore>
        </S.Products>
      </S.Container>
    </MainLayout>
  );
};

export default Home;
