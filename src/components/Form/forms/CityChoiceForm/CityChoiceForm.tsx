import React, { FC } from 'react';
import * as yup from 'yup';
import { InputIcon } from '../../../../assets/icons';
import useForm from '../../../../helpers/hooks/useForm/useForm';
import Input from '../../elements/Input/Input';
import { cities } from './mockData';
import * as S from './styles';

const CityChoiceForm: FC = () => {
  const { Form, Field } = useForm({
    schema: yup.object().shape({
      city: yup.string().required('Обязательное значение').min(3, 'Слишком мало'),
    })
  });

  const onSubmit = (values: {
    testInput: string;
    testInputTwo: string;
  }) => {
    console.log(values, 'dsadas');
  };

  return (
    <S.FormContainer>
      <S.FormHeader>Выбор города</S.FormHeader>
      <Form onSubmit={onSubmit}>
        <Field
          component={Input}
          name="city"
          placeholder="Введите свой город"
          icon={InputIcon}
          label="Всего 1001 город"
          customStyle={S.SearchInputCSS}
        />
      </Form>
      <S.Separator />
      <S.ListCities>
        {cities.map(city => <S.City key={city}>{city}</S.City>)}
      </S.ListCities>
    </S.FormContainer>
  );
};

export default CityChoiceForm;
