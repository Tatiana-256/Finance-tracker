import { FC } from 'react';
import styles from './styles.module.css';

type TotalSumProps = {
  currency: string;
  sum: number;
};

export const TotalSum: FC<TotalSumProps> = ({ sum, currency }) => {
  return (
    <>
      Total
      <div className={styles.total_container}>
        <div>{sum}</div>
        <div>{currency}</div>
      </div>
    </>
  );
};
