import React, { FC } from 'react';
import useGetParameter from '../../../utils/hooks/useGetParameter/useGetParameter';
import { POPUP_QUERY, POPUPS } from '../../../utils/hooks/useGetPopup/types';
import Button from '../../Button';
import { EButtonStyles } from '../../Button/types';
import SignInForm from '../../Form/forms/SignInForm/SIgnInForm';

import * as S from './styles';

export const SignIn: FC = () => {
  const { setQueryParam } = useGetParameter(); 
  
  return (
    <>
      <S.HeaderSignIn>Войти</S.HeaderSignIn>
      <S.HeaderQuestion>
        {`Нет аккаунта? `}
        <Button
          btnStyle={EButtonStyles.link}
          customStyle={S.LinkButtonCSS}
          onClick={() => setQueryParam(POPUP_QUERY.popup, POPUPS.signUp)}
        >
            Зарегистрироваться
        </Button>
      </S.HeaderQuestion>
      <S.FormContainer>
        <SignInForm />
      </S.FormContainer>
    </>
  );
};