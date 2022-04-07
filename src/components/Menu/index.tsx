import * as S from './styles'
import Image from 'next/image'
import { MenuController } from './menu.controller'

import { LogoWhiteIcon, MenuIcon, NotificationIcon } from 'assets'
import { Sidebar } from './Sidebar'

export const Menu = () => {

  const {
    actions: { handleClickSidebar },
    state:{ openSidebar , menuItemsList}
    } = MenuController()

  return (
    <>
      {openSidebar && <Sidebar openSidebar={openSidebar} handleClickSidebar={handleClickSidebar} menuItemsList={menuItemsList} />}
      <S.Container openSidebar={openSidebar}>
        <S.UserInfos>
          <S.ImageUser>
            Foto
          </S.ImageUser>

          <S.Notifications hasNotification>
            <Image src={NotificationIcon} alt='Notificações' />
          </S.Notifications>
        </S.UserInfos>

        <S.Logo>
          <Image src={LogoWhiteIcon} alt='Logo da Dom Barber' />
        </S.Logo>

        <S.Sidebar onClick={handleClickSidebar}>
          <Image src={MenuIcon} alt='Menu' />
        </S.Sidebar>
      </S.Container>
  </>
  )
}
