import * as S from './styles'
import Image from 'next/image'
import { LogoWhiteIcon, MenuIcon, NotificationIcon } from 'assets'

export const Menu = () => (
  <S.Container>

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

    <S.Sidebar>
      <Image src={MenuIcon} alt='Menu' />
    </S.Sidebar>
  </S.Container>
)
