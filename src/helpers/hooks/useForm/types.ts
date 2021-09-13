import { InputHTMLAttributes, ChangeEvent, FormHTMLAttributes, FormEvent, ReactNode } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import * as yup from 'yup';

import { IFields } from "../../../stores/form/form.store";

export type TFieldError = {
  message: string;
  field: string;
};

export interface IField extends TInputProps {
  component: React.ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  customStyle?: FlattenSimpleInterpolation;
  label?: string | ReactNode;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export interface IProps {
  schema?: yup.AnyObjectSchema;
  initialValues?: IFields;
}

export type TInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void,
};

export type TFormProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  onSubmit: (values: IFields, event: FormEvent<HTMLFormElement>) => void,
};
