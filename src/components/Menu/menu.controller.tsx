import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  ArrowLeftIcon,
  UserIcon,
  HouseIcon,
  CalendarIcon,
  ProductsIcon,
  PeopleIcon,
  SmileIcon,
  NotificationIcon,
} from '../../../public/assets';

export const MenuController = () => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleClickSidebar = () => setOpenSidebar(!openSidebar);

  const menuItemsList = [
    {
      icon: UserIcon,
      text: 'Minha Conta',
      url: '/perfil',
    },
    {
      icon: HouseIcon,
      text: 'Inicio',
      url: '/home',
    },
    {
      icon: CalendarIcon,
      text: 'Agenda',
      url: '/schedule',
    },
    {
      icon: ArrowLeftIcon,
      text: 'Serviços',
      url: '/newservice',
    },
    {
      icon: ProductsIcon,
      text: 'Produtos',
      url: '/products',
    },
    {
      icon: PeopleIcon,
      text: 'Profissionais',
      url: '/chooseprofessional',
    },
    {
      icon: SmileIcon,
      text: 'Pontuação',
      url: '/score',
    },
    {
      icon: NotificationIcon,
      text: 'Notificação',
      url: '/notifications',
    },
  ];

  return {
    states: {
      openSidebar,
      menuItemsList,
      company,
    },
    actions: {
      handleClickSidebar,
      push,
    },
  };
};
