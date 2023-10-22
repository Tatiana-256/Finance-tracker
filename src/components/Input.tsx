import cn from 'classnames';
import styles from './inputStyles.module.css';
import { ChangeEvent, FC } from 'react';

type InputProps<T> = {
  value: T;
  onChange: (value: T) => void;
  classNames?: {
    input?: string;
  };
};

export const Input: FC<InputProps<string>> = ({ classNames, value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={cn(styles.input, classNames?.input)}
      value={value}
      onChange={handleInputChange}
    />
  );
};
