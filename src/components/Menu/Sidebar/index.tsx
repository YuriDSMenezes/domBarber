import Image from 'next/image'
import { ArrowLeftIcon, LogoWhiteIcon } from 'assets'
import * as S from './styles'

interface itemProps {
  icon: string
  text: string
}

interface SidebarProps {
  openSidebar?: boolean
  handleClickSidebar?: () => void
  menuItemsList?: Array<itemProps>
}

export const Sidebar = ({ openSidebar, handleClickSidebar, menuItemsList }: SidebarProps) => (
  <S.Container openSidebar={openSidebar}>

    <S.Header>
      <S.ArrowBack onClick={handleClickSidebar}>
       <Image src={ArrowLeftIcon} alt='Voltar para a página anterior' />
      </S.ArrowBack>

      <S.Logo>
        <Image src={LogoWhiteIcon} alt='Logo Dom Barber' />
      </S.Logo>
    </S.Header>

    <S.Content>
      {menuItemsList?.map((item) => (
        <>
        <S.Item>
          <S.LogoItem>
          <Image src={item.icon} alt='Ícone' />
          </S.LogoItem>
          <S.LogoText>
            {item.text}
          </S.LogoText>
        </S.Item>
      </>
      ))}
    </S.Content>

  </S.Container>
)
