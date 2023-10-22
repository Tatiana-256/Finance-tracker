import { ValueByCurrency } from '../types';
import React, { FC } from 'react';
import styles from '../styles.module.css';

type SumByCurrencyProps = {
  parsedDataByCurrency: ValueByCurrency[];
  childrenWrapperRef: React.RefObject<HTMLDivElement>;
  handleCopyClick: () => void;
};
export const SumByCurrency: FC<SumByCurrencyProps> = ({
  parsedDataByCurrency,
  childrenWrapperRef,
  handleCopyClick,
}) => {
  return (
    <>
      <div>Parsed data by Currencies</div>

      <div className={styles.dataContainer} ref={childrenWrapperRef}>
        {parsedDataByCurrency.map(({ sum, currency }) => (
          <div className={styles.dataWrap}>
            <span className={styles.item}>{sum}</span>
            <span className={styles.item}>{currency}</span>
          </div>
        ))}
      </div>

      <button className={styles.button} onClick={handleCopyClick}>
        Copy
      </button>
    </>
  );
};
