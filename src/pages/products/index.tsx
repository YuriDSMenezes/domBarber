import { Menu } from 'components/Menu'
import { GetServerSideProps } from 'next'
import SEO from '../../components/SEO'
import * as S from './styles'

const Products = ({props}:any) => (
  <S.Container>
    <SEO title='Home' />
    <Menu />
  </S.Container>
)

// precisa ser sempre getServerSideProps e sempre com Async
// getServerSideProps retorna dados no servidor node criado pelo Next
// SSR
// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       teste: 'teste'
//     }
//   }
// }

export default Products
