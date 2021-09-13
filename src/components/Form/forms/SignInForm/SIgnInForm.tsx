import React, { FC } from 'react';
import * as yup from 'yup';
import useForm from '../../../../helpers/hooks/useForm/useForm';
import { colors } from '../../../../styles/defaultTheme';
import { EColors } from '../../../../styles/types';
import Button from '../../../Button';
import { EButtonStyles } from '../../../Button/types';
import Input from '../../elements/Input/Input';
import Password from '../../elements/Password/Password';

import * as S from './styles';

const SignInForm: FC = () => {
  const { Form, Field } = useForm({
    schema: yup.object().shape({
      email: yup.string().required('Обязательное значение'),
      password: yup.string().required('Обязательное значение')
    })
  });

  const onSubmit = (values: { email: string, password: string }) => {
    console.log(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Field
          component={Input}
          name="email"
          placeholder="Введите адрес электронной почты"
          label="Электронная почта"
          customStyle={S.InputCSS}
        />
        <Field
          component={Password}
          type="password"
          name="password"
          placeholder="Введите пароль"
          label="Пароль"
          customStyle={S.InputCSS}
        />
      </div>
      <Button
        btnStyle={EButtonStyles.primary}
        btnColor={EColors.mainColor}
        customStyle={S.SubmitButtonCSS}
      >
        Войти
      </Button>
      <Button
        btnStyle={EButtonStyles.link}
        customStyle={S.ForgetPasswordCSS}
      >
        Не помню пароль
      </Button>
    </Form>
  );
};

export default SignInForm;
