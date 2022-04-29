import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeftIcon,
  LogoWhiteIcon,
  MenuIcon,
  NotificationIcon,
} from '../../../public/assets';
import * as S from './styles';
import { MenuController } from './menu.controller';
import { Sidebar } from './Sidebar';

export const Menu = () => {
  const {
    actions: { handleClickSidebar, push },
    states: { openSidebar, menuItemsList, company },
  } = MenuController();
  const { pathname, back } = useRouter();

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('@domBarber:cart');
    }
    back();
  };

  return (
    <>
      {openSidebar && (
        <Sidebar
          openSidebar={openSidebar}
          handleClickSidebar={handleClickSidebar}
          menuItemsList={menuItemsList}
        />
      )}
      <S.Container openSidebar={openSidebar}>
        <S.UserInfos>
          {pathname === '/[companyName]/home' ? (
            <S.ImageUser>
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="algo"
              />
            </S.ImageUser>
          ) : (
            <S.Back onClick={handleBack}>
              <img src={ArrowLeftIcon.src} />
              <p>Voltar</p>
            </S.Back>
          )}

          <S.Notifications hasNotification>
            <img
              src={NotificationIcon.src}
              alt="Notificações"
              width="100%"
              height="100%"
            />
          </S.Notifications>
        </S.UserInfos>

        <S.Logo
          onClick={() => {
            push({
              pathname: `/[companyName]/home`,
              query: { companyName: company?.app?.url },
            });
          }}
        >
          <img
            src={LogoWhiteIcon.src}
            alt="Logo da Dom Barber"
            width="100%"
            height="100%"
          />
        </S.Logo>

        <S.Sidebar>
          <S.UserLoginDesktop>
            <Link href="/">Entrar</Link>
            <Link href="/">Cadastre-se</Link>
          </S.UserLoginDesktop>
          <S.SidebarImage onClick={handleClickSidebar}>
            <img src={MenuIcon.src} alt="Menu" width="100%" height="100%" />
          </S.SidebarImage>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
