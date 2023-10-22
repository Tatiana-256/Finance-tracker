import { useMain } from './useMain';
import styles from './styles.module.css';

import { SumByCategory, SumByCurrency, TotalSum } from './views';
import { CurrencySideBar } from './views/CurrencySideBar';
import { CZK } from './constants';
import icon from '../../assets/svg/img.png';
import { useCurrency } from './views/hooks';
import { Currency } from './types';

export const HomePage = () => {
  const {
    isOpen,
    setIsOpen,
    currenciesRates,
    setCurrenciesRates,
    currentCurrency,
    setCurrentCurrency,
  } = useCurrency();

  const {
    parsedDataByCategory,
    input,
    handleTextAreaChange,
    handleParse,
    handleCopyClick,
    childrenWrapperRef,
    parsedDataByCurrency,
    totalCZ,
    exchangeTotalSum,
  } = useMain(currenciesRates, currentCurrency);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={styles.currency_open_button}
      >
        <img src={icon} className={styles.img} alt="currency" />
      </button>

      <CurrencySideBar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={(value: typeof CZK, currentCurrency: Currency) => {
          setCurrenciesRates(value);
          setCurrentCurrency(currentCurrency);
          setIsOpen(false);
        }}
      />

      <textarea className={styles.text} value={input} onChange={handleTextAreaChange} />

      <button onClick={handleParse} className={styles.button}>
        Parse
      </button>

      {totalCZ && <TotalSum currency={currentCurrency} sum={exchangeTotalSum || totalCZ} />}

      {parsedDataByCategory && (
        <SumByCategory
          parsedDataByCategory={parsedDataByCategory}
          handleCopyClick={handleCopyClick}
          childrenWrapperRef={childrenWrapperRef}
        />
      )}

      {parsedDataByCurrency && (
        <SumByCurrency
          parsedDataByCurrency={parsedDataByCurrency}
          childrenWrapperRef={childrenWrapperRef}
          handleCopyClick={handleCopyClick}
        />
      )}
    </div>
  );
};
