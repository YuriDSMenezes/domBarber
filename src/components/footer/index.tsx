import {
  FacebookIcon,
  InstagramIcon,
  LogoWhiteIcon,
  WhatsappIcon,
} from '../../../public/assets';
import * as S from './styles';

const Footer = () => (
  <S.Container>
    <S.Logo>
      <img src={LogoWhiteIcon.src} />
      <S.LogoDescription>
        Conheça nossa barbearia e o que oferecemos para você!
      </S.LogoDescription>
    </S.Logo>
    <S.MenuFooter>
      <S.Title>Menu</S.Title>
      <S.MenuContent>
        <div>
          <S.MenuItems>Minha conta</S.MenuItems>
          <S.MenuItems>Início</S.MenuItems>
          <S.MenuItems>Agenda</S.MenuItems>
          <S.MenuItems>Serviços</S.MenuItems>
          <S.MenuItems>Produtos</S.MenuItems>
          <S.MenuItems>Profissionais</S.MenuItems>
          <S.MenuItems>Pontuação</S.MenuItems>
        </div>
        <div>
          <S.MenuItems>Carrinho</S.MenuItems>
          <S.MenuItems>Pedidos</S.MenuItems>
          <S.MenuItems>Notificação</S.MenuItems>
          <S.MenuItems>Promoções</S.MenuItems>
          <S.MenuItems>Filiais</S.MenuItems>
          <S.MenuItems>Sobre nós</S.MenuItems>
          <S.MenuItems>Sobre o App</S.MenuItems>
        </div>
      </S.MenuContent>
    </S.MenuFooter>
    <S.ContactFooter>
      <S.Title>Contato</S.Title>
      <S.Contact>(11) 6543-00009</S.Contact>
      <S.Contact>(11) 6543-00009</S.Contact>
      <S.Icons>
        <S.Icon>
          <img src={InstagramIcon.src} alt="instagram" />
        </S.Icon>
        <S.Icon>
          <img src={FacebookIcon.src} alt="facebook" />
        </S.Icon>
        <S.Icon>
          <img src={WhatsappIcon.src} alt="whatsapp" />
        </S.Icon>
      </S.Icons>
    </S.ContactFooter>
    <S.Location>
      <S.Title>Localização</S.Title>
      <S.Map>Mapa</S.Map>
    </S.Location>
  </S.Container>
);

export default Footer;
