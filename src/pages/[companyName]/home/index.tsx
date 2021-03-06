import { CarouselProduct } from 'components/CarouselProduct';
import { CarouselProfessional } from 'components/CarouselProfessional';
import { HorizontalList } from 'components/HorizontalList';
import Input from 'components/Input';
import MainLayout from 'layouts/MainLayout';
import { NextPage } from 'next';
import { useGlobal } from 'hooks';
import { useRouter } from 'next/router';
import { CarouselService } from 'components/CarouselServices';
import SEO from 'components/SEO';
import Image from 'next/image';
import { RightIcon } from '../../../../public/assets';
import * as S from './styles';
import { useAppController } from './home.controller';

const Home: NextPage = () => {
  const { states: globalStates } = useGlobal();
  const { push } = useRouter();
  useAppController();
  const {
    states: { company },
  } = useGlobal();

  return (
    <MainLayout>
      <SEO company={company} />
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
        <S.BannerContainer>
          {globalStates.company.image && (
            <Image
              src={
                globalStates?.company?.image?.cover?.app ||
                globalStates?.company?.image?.cover?.desktop
              }
              layout="fill"
              objectFit="cover"
            />
          )}
        </S.BannerContainer>
        <S.HorizontalListContainer>
          <HorizontalList />
        </S.HorizontalListContainer>
        <S.ServiceContainer>
          <S.Description>Serviços</S.Description>
          <CarouselService services={globalStates?.services} size="lg" />
          <S.SeeMore
            onClick={() =>
              push({
                pathname: `/[companyName]/services`,
                query: { companyName: company?.app?.url },
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
          <CarouselProfessional items={globalStates?.professionals} size="sm" />
          <S.SeeMore
            onClick={() =>
              push({
                pathname: `/[companyName]/professionals`,
                query: { companyName: company?.app?.url },
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
        </S.Professional>
        <S.Products>
          <S.Description>Produtos</S.Description>
          <CarouselProduct items={globalStates.products} size="md" />
          <S.SeeMore
            onClick={() =>
              push({
                pathname: `/[companyName]/listproducts`,
                query: { companyName: company?.app?.url },
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
        </S.Products>
      </S.Container>
    </MainLayout>
  );
};

export default Home;
