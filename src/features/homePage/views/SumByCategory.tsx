import styles from '../styles.module.css';
import { Category } from '../types';
import { FC } from 'react';

type SumByCategoryProp = {
  childrenWrapperRef: React.RefObject<HTMLDivElement>;
  parsedDataByCategory: Category[];
  handleCopyClick: () => void;
};

export const SumByCategory: FC<SumByCategoryProp> = ({
  parsedDataByCategory,
  handleCopyClick,
  childrenWrapperRef,
}) => {
  return (
    <>
      <div>Parsed data by Categories</div>

      <div className={styles.dataContainer} ref={childrenWrapperRef}>
        {parsedDataByCategory.map(({ sum, currency, categoryName }) => (
          <div className={styles.dataWrap}>
            <span className={styles.item}>{sum}</span>

            <span className={styles.item}>{currency}</span>

            <span className={styles.item}>{categoryName}</span>
          </div>
        ))}
      </div>

      <button className={styles.button} onClick={handleCopyClick}>
        Copy
      </button>
    </>
  );
};
