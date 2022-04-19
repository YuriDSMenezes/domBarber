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
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleClickSidebar = () => setOpenSidebar(!openSidebar);

  const menuItemsList = [
    {
      icon: UserIcon,
      text: 'Minha Conta',
    },
    {
      icon: HouseIcon,
      text: 'Inicio',
    },
    {
      icon: CalendarIcon,
      text: 'Agenda',
    },
    {
      icon: ArrowLeftIcon,
      text: 'Serviços',
    },
    {
      icon: ProductsIcon,
      text: 'Produtos',
    },
    {
      icon: PeopleIcon,
      text: 'Profissionais',
    },
    {
      icon: SmileIcon,
      text: 'Pontuação',
    },
    {
      icon: NotificationIcon,
      text: 'Notificação',
    },
  ];

  return {
    states: {
      openSidebar,
      menuItemsList,
    },
    actions: {
      handleClickSidebar,
    },
  };
};
