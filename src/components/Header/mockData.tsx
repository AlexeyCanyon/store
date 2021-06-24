import { BasketIcon, CompareIcon, FavoriteIcon, LoginIcon } from "../../assets/icons";
import type { IMainMenuItem, IToolbarItem } from "./types";

export const menuItems: IMainMenuItem[] = [
  {
    name: 'Каталог',
    link: '',
  },
  { 
    name: 'Акции',
    link: '',
  },
  {
    name: 'Доставка и Оплата',
    link: '',
  },
  {
    name: 'О магазине',
    link: '',
  },
  {
    name: 'Кредит и Рассрочка',
    link: ''
  },
  {
    name: 'Поддержка',
    link: ''
  },
  {
    name: 'Еще',
    link: '',
    dropdownMenu: [
      {
        name: 'Вспомогательное меню',
        link: ''
      },
      {
        name: 'Вспомогательное меню',
        link: ''
      },
      {
        name: 'Вспомогательное меню',
        link: ''
      },
      {
        name: 'Вспомогательное меню',
        link: ''
      },
    ],
  },
];

export const toolbarMenuItems: IToolbarItem[] = [
  {
    title: 'Войти',
    icon: LoginIcon
  },
  {
    title: 'Сравнить',
    icon: CompareIcon
  },
  {
    title: 'Избранное',
    icon: FavoriteIcon
  },
  {
    title: 'Корзина',
    icon: BasketIcon
  },
];