import {
  TextInputProps
} from '@components/TextInput';

export const data: TextInputProps[] = [
  {
    type: 'text',
    placeholder: 'Введіть пошту',
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    helperText: 'Введіть коректну пошту',
    error: true
  },
  {
    type: 'text',
    placeholder: 'Введіть пошту',
    value: 'test@mail.com',
    helperText: 'Введіть коректну пошту',
    direction: 'rtl',
    error: true
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    helperText: 'Пароль занадто короткий',
    error: true
  },
  {
    type: 'password',
    placeholder: 'Введіть пароль',
    value: 'Test_123',
    helperText: 'Пароль занадто короткий',
    direction: 'rtl',
    error: true
  },
];