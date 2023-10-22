import { useMain } from './useMain';
import styles from './styles.module.css';

import { SumByCurrency } from './views';
import { CurrencySideBar } from './views/CurrencySideBar';
import { CZK } from './constants';
import icon from '../../assets/svg/img.png';
import { useCurrency } from './views/hooks';

export const HomePage = () => {
  const { isOpen, setIsOpen, currency, setCurrency } = useCurrency();

  const {
    parsedData,
    data,
    handleTextAreaChange,
    handleParse,
    handleCopyClick,
    childrenWrapperRef,
    parsedDataByCurrency,
  } = useMain(currency);

  return (
    <div className={styles.container}>
      <CurrencySideBar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={(value: typeof CZK) => {
          setCurrency(value);
          setIsOpen(false);
        }}
      />

      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={styles.currency_open_button}
      >
        <img src={icon} className={styles.img} alt="currency" />
      </button>

      <textarea className={styles.text} value={data} onChange={handleTextAreaChange} />

      <button onClick={handleParse} className={styles.button}>
        Parse
      </button>

      {parsedData && (
        <>
          <div>Parsed data by Categories</div>

          <div className={styles.dataContainer} ref={childrenWrapperRef}>
            {parsedData.map(({ sum, currency, categoryName }) => (
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
      )}

      {parsedDataByCurrency && (
        <SumByCurrency
          parsedDataByCurrency={parsedDataByCurrency}
          childrenWrapperRef={childrenWrapperRef}
          handleCopyClick={handleCopyClick}
        />
      )}

      {/*{totalSum && <TotalSum totalSum={totalSum} />}*/}
    </div>
  );
};
