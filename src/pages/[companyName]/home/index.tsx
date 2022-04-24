import { Carousel } from 'components/Carousel';
import { HorizontalList } from 'components/HorizontalList';
import Input from 'components/Input';
import MainLayout from 'layouts/MainLayout';
import { NextPage } from 'next';
import { useGlobal } from 'hooks/Global';
import { RightIcon } from '../../../../public/assets';
import * as S from './styles';
import { SrcImages } from '../../../../_mocks/srcImages';
import { useAppController } from './app.controller';

const Home: NextPage = () => {
  useAppController();
  const {
    states: { services },
  } = useGlobal();
  console.log(services);
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
        <S.BannerContainer>
          <img
            src="https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="teste"
            width="100%"
            height="100%"
          />
        </S.BannerContainer>
        <S.HorizontalListContainer>
          <HorizontalList />
        </S.HorizontalListContainer>
        <S.ServiceContainer>
          <S.Description>Serviços</S.Description>
          <Carousel src={SrcImages} size="lg" />
          <S.SeeMore>
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
