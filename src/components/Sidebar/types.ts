export type IMenuItem = {
  id: number;
  title: string;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  subItems?: IMenuItem[];
};

export type Item = {
  [key: string]: any;
};

export type MenuItem = Item & {
  subMenu?: Item[];
} 

export interface IPropsListItem {
  items: MenuItem[];
  visible: boolean;
  onChange: (selectedID: number | null) => void;
  isFirst?: boolean;
}