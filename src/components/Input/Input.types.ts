export enum InputVariantEnum {
  text = 'text',
  password = 'password',
}

export type InputProps = {
  value?: any;
  type?: InputVariantEnum;
  placeholder?: string;
  errorText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};
