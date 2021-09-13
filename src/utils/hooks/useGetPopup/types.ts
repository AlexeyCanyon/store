export enum EPopup {
  signIn = 'signIn',
  signUp = 'signUp'
}

export enum EPopupQuery {
  popup = 'popup'
}

export const POPUPS: Record<EPopup, string> = {
  [EPopup.signIn]: EPopup.signIn,
  [EPopup.signUp]: EPopup.signUp
};

export const POPUP_QUERY: Record<EPopupQuery, string> = {
  [EPopupQuery.popup]: EPopupQuery.popup
};