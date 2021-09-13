export enum EColors {
  blackColor = 'blackColor',
  whiteColor = 'whiteColor',
  greyColor = 'greyColor',
  mainColor = 'mainColor',
  ghostWhite = 'ghostWhite',
}

export interface Colors extends Record<EColors, string> {};