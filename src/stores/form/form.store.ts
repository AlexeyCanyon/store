import { action, computed, makeObservable, observable } from "mobx";
import * as yup from 'yup';

export interface IFields {
  [key: string]: string | number | undefined;
}

export interface IFieldErrors {
  [key: string]: string;
}

export class FormStore {
  private _fields: IFields = {};

  public _schema: yup.AnyObjectSchema = yup.object().shape({});

  public fieldErrors: IFieldErrors= {};
  
  constructor() {
    makeObservable<FormStore, '_fields'>(this, {
      _fields: observable,
      _schema: observable,
      fieldErrors: observable,
      fields: computed,
      validation: computed,
      formErrors: computed,
      addField: action,
      schema: action,
    },
    this._fields = {});
  }
  
  public hasErrors = () => {
    const castedValues = this._schema.cast(this._fields);

    return this._schema.validate(castedValues, { abortEarly: false });
  }

  public get validation() {
    return this._schema.isValid({ ...this._fields });
  }

  public get fields() {
    return this._fields;
  }

  public get formErrors() {
    return this.fieldErrors;
  }

  public setFormError = (errors: IFieldErrors) => {
    this.fieldErrors = errors;
  };

  public schema = (newSchema: yup.AnyObjectSchema) => {
    this._schema = newSchema;
  }

  public addField(name: string, initialValue?: string | number) {
    this._fields[name] = initialValue || '';
  }

  public getField(name: string) {
    return this.fields?.[name];
  }

  public changeField(name: string, value: string) {
    this._fields[name] = value;
  }
}