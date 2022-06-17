import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import * as S from './styles';

interface HorizontalListItem {
  item: string;
  url: string;
}

export const HorizontalList = () => {
  const {
    states: { company },
  } = useGlobal();

  const { push } = useRouter();

  const array = [
    {
      item: 'Promoções',
      url: '',
    },
    {
      item: 'Agenda',
      url: '/schedule',
    },
    {
      item: 'Serviços',
      url: '/newservice',
    },
    {
      item: 'Produtos',
      url: '/products',
    },
    {
      item: 'Profissionais',
      url: '/chooseprofessionals',
    },
    {
      item: 'Carrinho',
      url: '/cart',
    },
  ];

  const handleClick = (url: string) =>
    push({
      pathname: `/[companyName]/${url}`,
      query: { companyName: company?.app?.url },
    });

  return (
    <S.Container>
      {array.map(({ item, url }: HorizontalListItem, index: number) => (
        <S.Item key={`${item}${index}`} onClick={() => handleClick(url)}>
          {item}
        </S.Item>
      ))}
    </S.Container>
  );
};
