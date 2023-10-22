import { CZK } from '../constants';
import React, { FC } from 'react';
import { Currency } from '../types';
import styles from './styles.module.css';

type CurrencySelectProps = {
  value: Currency;
  onChange: (currency: Currency) => void;
};

export const CurrencySelect: FC<CurrencySelectProps> = ({ value, onChange }) => {
  return (
    <>
      Select currency
      <select
        className={styles.select_container}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value as Currency)}
      >
        {Object.keys(CZK).map((el) => (
          <option value={el}>{el}</option>
        ))}
        <option value="czk">czk</option>
      </select>
    </>
  );
};
