import { FC } from 'react';
import cn from 'classnames';

import styles from '../styles.module.css';
import { useCurrency } from './hooks';
import { CZK } from '../constants';
import { Input } from '../../../components';
import { CurrencySelect } from './CurrencySelect';

type CurrencySideBarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (currency: typeof CZK) => void;
};

export const CurrencySideBar: FC<CurrencySideBarProps> = ({ isOpen, onClose, onSave }) => {
  const { usd, setUSD, uah, setUAH, eur, setEUR, currentCurrency, setCurrentCurrency } =
    useCurrency();

  return (
    <div className={cn(styles.currencyWrap, { [styles.currency_open]: isOpen })}>
      <button className={styles.currency_close_button} onClick={onClose}>
        X
      </button>

      <div>
        <span>USD</span>
        <Input value={usd} onChange={setUSD} />
      </div>
      <div>
        <span>EUR</span>
        <Input value={eur} onChange={setEUR} />
      </div>
      <div>
        <span>UAH</span>
        <Input value={uah} onChange={setUAH} />
      </div>

      <CurrencySelect onChange={setCurrentCurrency} value={currentCurrency} />

      <button onClick={() => onSave({ usd, eur, uah })}>Save</button>
    </div>
  );
};
