import { RightIcon } from 'assets';
import { Carousel } from 'components/Carousel';
import { HorizontalList } from 'components/HorizontalList';
import Input from 'components/Input';
import MainLayout from 'layouts/MainLayout';
import { NextPage } from 'next';
import Image from 'next/image';
import * as S from './styles';

const Home: NextPage = () => (
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
      <S.BannerContainer>Banner</S.BannerContainer>
      <S.HorizontalListContainer>
        <HorizontalList />
      </S.HorizontalListContainer>
      <S.ServiceContainer>
        <S.Description>Serviços</S.Description>
        <Carousel />
        <S.SeeMore>
          <p>Ver Todos</p>
          <Image src={RightIcon} alt="Ícone ver mais" />
        </S.SeeMore>
      </S.ServiceContainer>
      <S.Professional>
        <S.Description>Profissionais</S.Description>
        <Carousel />
        <S.SeeMore>
          <p>Ver Todos</p>
          <Image src={RightIcon} alt="Ícone ver mais" />
        </S.SeeMore>
      </S.Professional>
    </S.Container>
  </MainLayout>
);

export default Home;
