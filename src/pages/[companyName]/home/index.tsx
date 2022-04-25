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
import { SrcImages } from '../../../../_mocks/srcImages';
import { useAppController } from './app.controller';

const Home: NextPage = () => {
  const { states: globalStates } = useGlobal();
  useAppController();
  const {
    states: { company },
  } = useGlobal();

  const { push } = useRouter();
  const companyName = 'ps1';
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
          <CarouselService src={SrcImages} size="lg" services />
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
          <Carousel src={SrcImages} size="sm" />
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
          <Carousel src={SrcImages} size="md" />
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
