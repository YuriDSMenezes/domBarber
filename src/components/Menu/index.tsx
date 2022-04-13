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
          <S.ImageUser>Foto</S.ImageUser>

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

        <S.Sidebar onClick={handleClickSidebar}>
          <S.UserLoginDesktop>
            <p>Entrar</p>
            <p>Cadastre-se</p>
          </S.UserLoginDesktop>
          <div style={{ width: '25px', marginLeft: '50px' }}>
            <img src={MenuIcon.src} alt="Menu" width="100%" height="100%" />
          </div>
        </S.Sidebar>
      </S.Container>
    </>
  );
};
