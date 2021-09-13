import React, { ChangeEvent, FC, FormEvent, useEffect } from 'react';
import * as yup from 'yup';

import { toJS } from 'mobx';
import { observer, useLocalStore } from 'mobx-react';
import { FormStore, IFieldErrors } from '../../../stores/form/form.store';

import * as S from './styles';
import { IField, IProps, TFormProps } from './types';

const useForm = ({ initialValues, schema }: IProps = {}) => {
  const store = useLocalStore(() => new FormStore());

  useEffect(() => {
    store.schema(schema);
  }, [schema, store]);

  const checkFormErrors = async (callback: VoidFunction, field?: string) => {
    try {
      await store.hasErrors();
      callback();
      store.setFormError({});
    }
    catch (error) {
      let fieldErrors: IFieldErrors = {};
      error.inner.forEach((err: yup.ValidationError) => {
        fieldErrors = {
          ...fieldErrors,
          [err.path]: err.message,
        };
      });

      if (field) {
        store.setFormError({ ...store.formErrors, [field]: fieldErrors[field] });
      } else {
        store.setFormError(fieldErrors);
      }
    }
  };

  const Form: FC<TFormProps> = observer(({ children, onSubmit, ...rest }) => {
    const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      checkFormErrors(() => onSubmit(toJS(store.fields), event));
    };

    return (
      <form onSubmit={event => onSubmitForm(event)} {...rest}>{children}</form>
    );
  });

  const Field: FC<IField> = observer(({
    name, label, customStyle, component: Component, onChange, ...rest
  }) => {
    const onChangeField = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (onChange) {
        onChange(value, event);
      }

      store.changeField(name, value);
      checkFormErrors(() => {}, name);
    };

    const onBlur = () => {
      checkFormErrors(() => {}, name);
    };

    const error = store.formErrors[name];

    useEffect(() => {
      store.addField(name, initialValues?.[name]);
    }, [name]);

    return (
      <S.FieldContainer customStyle={customStyle}>
        <S.LabelField>{label}</S.LabelField>
        <Component onBlur={onBlur} onChange={onChangeField} {...rest} />
        {error && (
          <span>{error}</span>
        )}
      </S.FieldContainer>
    );
  });

  return {
    Form,
    Field,
    getFields: store.fields,
    getValidation: store.validation,
    hasErrors: store.hasErrors,
    formErrors: store.formErrors
  };
};

export default useForm;