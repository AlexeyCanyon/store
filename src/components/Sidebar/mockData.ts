import { AppleIcon, AudioIcon, GamerIcon, RouterIcon, SpeakerIcon, TowerPCIcon, TVIcon, WatchIcon } from "../../assets/icons";
import type { IMenuItem } from "./types";

const createDoubleSubMenu = (prefix: string) => {
  const createItems = Array(Math.floor(Math.random( ) * (10 - 2 + 1)) + 2);
  return createItems
  .fill({
    id: 1,
    title: `SubItem 2 ${prefix}`,
    subItems: createItems.slice(0,3)
      .fill({
        title: `SubItem 3 ${prefix}`,
      })
      .map((q, id) => ({ ...q, id })) }
  ).map((q, id) => ({ ...q, id }));
};



export const MENU_ITEMS: IMenuItem[] = [
  {
    id: 0,
    title: 'Телевизоры',
    icon: TVIcon,
    subItems: [
      {
        id: 0,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
      {
        id: 1,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
      {
        id: 2,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
      {
        id: 3,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
    ]
  },
  {
    id: 1,
    title: 'Проекторы',
    icon: RouterIcon,
    subItems: [
      {
        id: 0,
        title: 'subItem 1 - Проекторы',
        subItems: createDoubleSubMenu('Проекторы')
      },
      {
        id: 1,
        title: 'subItem 1 - Проекторы',
        subItems: createDoubleSubMenu('Проекторы')
      },
      {
        id: 2,
        title: 'subItem 1 - Проекторы',
        subItems: createDoubleSubMenu('Проекторы')
      },
      {
        id: 3,
        title: 'subItem 1 - Проекторы',
        subItems: createDoubleSubMenu('Проекторы')
      },
    ]
  },
  {
    id: 2,
    title: 'Умные часы и браслеты',
    icon: WatchIcon,
    subItems: [
      {
        id: 0,
        title: 'subItem 1',
        icon: TVIcon,
      },
      {
        id: 1,
        title: 'subItem 1',
        icon: TVIcon,
      },
      {
        id: 2,
        title: 'subItem 1',
        icon: TVIcon,
      },
      {
        id: 3,
        title: 'subItem 1',
        icon: TVIcon,
      },
    ]
  },
  {
    id: 3,
    title: 'Акустические системы',
    icon: SpeakerIcon,
    subItems: [
      {
        id: 0,
        title: 'subItem 1',
        icon: TVIcon,
      },
      {
        id: 1,
        title: 'subItem 1',
        icon: TVIcon,
      },
      {
        id: 2,
        title: 'subItem 1',
        icon: TVIcon,
      },
      {
        id: 3,
        title: 'subItem 1',
        icon: TVIcon,
      },
    ]
  },
  {
    id: 4,
    title: 'Наушники и гарнитура',
    icon: AudioIcon
  },
  {
    id: 5,
    title: 'Комплектующие и ПК',
    icon: TowerPCIcon
  },
  {
    id: 6,
    title: 'Игровые приставки и аксессуары',
    icon: GamerIcon
  },
  {
    id: 7,
    title: 'Apple',
    icon: AppleIcon,
    subItems: [
      {
        id: 0,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
      {
        id: 1,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
      {
        id: 2,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
      {
        id: 3,
        title: 'subItem 1',
        subItems: createDoubleSubMenu('Телевизоры')
      },
    ]
  },
];