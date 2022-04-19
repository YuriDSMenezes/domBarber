import Link from 'next/link';
import {
  LogoWhiteIcon,
  MenuIcon,
  NotificationIcon,
} from '../../../public/assets';
import * as S from './styles';
import { MenuController } from './menu.controller';
import { Sidebar } from './Sidebar';

export const Menu = () => {
  const {
    actions: { handleClickSidebar },
    states: { openSidebar, menuItemsList },
  } = MenuController();

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
          <S.ImageUser>
            <img
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="algo"
            />
          </S.ImageUser>

          <S.Notifications hasNotification>
            <img
              src={NotificationIcon.src}
              alt="Notificações"
              width="100%"
              height="100%"
            />
          </S.Notifications>
        </S.UserInfos>

        <S.Logo>
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
