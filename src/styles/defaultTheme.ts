import { DefaultTheme } from "styled-components";
import type { Colors } from "./types";

declare module "styled-components" {
  export interface DefaultTheme extends Colors {
    boxShadow: string;
  }
}

export const colors: Colors = {
  whiteColor: '#ffffff',
  greyColor: '#bdbdbd',
  mainColor: '#5F3EC0',
  // Было #303030;
  blackColor: '#121212',
  ghostWhite: '#F9F8FF',
};

export const defaultTheme: DefaultTheme = {
  boxShadow: '0px 51px 136px rgba(0, 0, 0, 0.02), 0px 11px 92px rgba(0, 0, 0, 0.045), 0px 3px 15px rgba(0, 0, 0, 0.1)',
  ...colors,
};

// TODO: in the future need will add dark theme
// export const darkTheme: DefaultTheme = {
//   primaryColor: "#fff",
// 	secondaryColor: "#cacaca",
// }