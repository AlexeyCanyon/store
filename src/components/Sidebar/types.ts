export type IMenuItem = {
  id: number;
  title: string;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  subItems?: IMenuItem[];
};
