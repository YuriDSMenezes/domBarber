import Image from 'next/image'
import * as S from './styles'

export const Carousel = () => (
  <S.Container>
    <S.Item >
      <Image src='https://www.montarumnegocio.com/wp-content/uploads/2020/05/lista-de-material-para-cabeleireiro.jpg' alt='teste' layout='responsive' width='100%' height='100%'/>
    </S.Item>
    <S.Item>
       <Image src='https://www.montarumnegocio.com/wp-content/uploads/2020/05/lista-de-material-para-cabeleireiro.jpg' alt='teste' layout='responsive' width='100%' height='100%'/>
    </S.Item>
    <S.Item>
       <Image src='https://www.montarumnegocio.com/wp-content/uploads/2020/05/lista-de-material-para-cabeleireiro.jpg' alt='teste' layout='responsive' width='100%' height='100%'/>
    </S.Item>
  </S.Container>
)
