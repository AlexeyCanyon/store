export interface IDropdownMenuItem {
  name: string;
  link: string;
}

export interface IMainMenuItem {
  name: string;
  link: string;
  dropdownMenu?: IDropdownMenuItem[];
}

export type IToolbarItem = {
  title: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}