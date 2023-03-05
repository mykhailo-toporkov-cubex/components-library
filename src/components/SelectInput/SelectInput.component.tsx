import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { SelectInputProps } from './SelectInput.types';
import Select, { StylesConfig } from 'react-select';
import styles from './SelectInput.module.scss';
import { Text, TextVariantsEnum } from '@components/Text';

export const SelectInputComponent: React.FC<SelectInputProps> = ({
  options,
  defaultValue,
  icon,
  placeholder,
  helperText,
  error = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [focus, setFocus] = useState(false)

  const SelectClass = classNames(styles.container, {
    [styles[`container_error`]]: error,
    [styles[`container_focus`]]: focus,
  })

  const defaultStyles: StylesConfig = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      backgroundColor: 'var(--white)',
      color: state.isSelected ? "var(--primary)" : "var(--black)",
      ':active': {
        ...defaultStyles[':active'],
        color: 'var(--white)',
        backgroundColor: 'var(--white)',
      },
      ':hover': {
        ...defaultStyles[':hover'],
        color: 'var(--light-primary)',
      },
    }),
  }

  const handleClickInside = () => setFocus(true);

  const handleClickOutside = () => setFocus(false);

  useEffect(() => {
    const listener = (event: Event) => {
      const el = containerRef?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handleClickOutside();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [containerRef, handleClickOutside]);

  return (
    <div className={SelectClass} ref={containerRef} onClick={handleClickInside}>
      <Select
        className={styles.select}
        options={options}
        defaultValue={defaultValue}
        placeholder={<label className={styles.label}>{placeholder}</label>}
        styles={{...defaultStyles}}
      />
      {helperText && (
        <label className={styles.helperText}>
          <Text variant={TextVariantsEnum.Caption}>{helperText}</Text>
        </label>
      )}
    </div>
  );
};
