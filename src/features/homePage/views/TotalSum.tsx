import { FC } from 'react';

type TotalSumProps = {
  currency: string;
  sum: string;
};

export const TotalSum: FC<TotalSumProps> = ({ sum, currency }) => {
  return (
    <div>
      <div>{sum}</div>
      <div>{currency}</div>
    </div>
  );
};
