import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

export const InputComponent: React.FC<InputProps> = ({
  value,
  type = 'text',
  placeholder,
  errorText,
  onChange,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState(false);

  const InputClass = classNames(styles.input, {
    [styles[`input_active`]]: focus,
    [styles[`input_error`]]: errorText,
    [styles[`input_icon`]]: type === 'password',
  });

  const helperTextClass = classNames(styles.helperText, {
    [styles[`helperText_focus`]]: focus,
    [styles[`helperText_minimize`]]: ref.current?.value || focus,
    [styles[`helperText_error`]]: errorText,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShow((prev) => !prev);
    ref.current?.focus();
  };

  return (
    <>
      <div className={InputClass}>
        <input
          onChange={onChange}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
          type={show ? 'text' : 'password'}
        />
        {type === 'password' && (
          <SvgIcon
            src={IconsEnum.hideShow}
            size={18}
            className={styles.icon}
            color={'ultra-light-gray'}
            onClick={handleClick}
          />
        )}
        {placeholder && (
          <label className={helperTextClass}>{placeholder}</label>
        )}
        {errorText && <label className={styles.errorText}>{errorText}</label>}
      </div>
    </>
  );
};
