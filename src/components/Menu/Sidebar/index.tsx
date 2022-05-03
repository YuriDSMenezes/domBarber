import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import { singOut } from 'services/FirebaseOAuth';
import {
  ArrowLeftIcon,
  LogoutIcon,
  LogoWhiteIcon,
} from '../../../../public/assets';
import * as S from './styles';

interface IconProps {
  src: string;
}
interface itemProps {
  icon: IconProps;
  text: string;
  url: string;
}

interface SidebarProps {
  openSidebar?: boolean;
  handleClickSidebar?: () => void;
  menuItemsList?: Array<itemProps>;
}

export const Sidebar = ({
  openSidebar,
  handleClickSidebar,
  menuItemsList,
}: SidebarProps) => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  return (
    <>
      <S.BackgroundBlur />
      <S.Container openSidebar={openSidebar}>
        <S.Header>
          <S.ArrowBack onClick={handleClickSidebar}>
            <img
              src={ArrowLeftIcon.src}
              alt="Voltar para a página anterior"
              width="100%"
              height="100%"
            />
          </S.ArrowBack>

          <S.Logo>
            <img
              src={LogoWhiteIcon.src}
              alt="Logo Dom Barber"
              width="100%"
              height="100%"
            />
          </S.Logo>
        </S.Header>

        <S.Content>
          {menuItemsList?.map((item, index) => (
            <S.Item
              key={index}
              onClick={() => {
                push({
                  pathname: `/[companyName]/${item?.url}`,
                  query: { companyName: company?.app?.url },
                });
              }}
            >
              <S.LogoItem>
                <img
                  src={item.icon.src}
                  alt="Ícone"
                  width="100%"
                  height="100%"
                />
              </S.LogoItem>
              <S.LogoText>{item.text}</S.LogoText>
            </S.Item>
          ))}
        </S.Content>
        <S.Logout onClick={() => singOut()}>
          <S.LogoItem>
            <img src={LogoutIcon.src} alt="Sair do aplicativo" />
          </S.LogoItem>
          <span>Sair</span>
        </S.Logout>
      </S.Container>
    </>
  );
};
