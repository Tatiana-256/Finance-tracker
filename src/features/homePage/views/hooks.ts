import { useState } from 'react';
import { CZK } from '../constants';
import { Currency } from '../types';

export const useCurrency = () => {
  const [usd, setUSD] = useState(CZK.usd);
  const [eur, setEUR] = useState(CZK.eur);
  const [uah, setUAH] = useState(CZK.uah);

  const [isOpen, setIsOpen] = useState(false);
  const [currenciesRates, setCurrenciesRates] = useState<typeof CZK>(CZK);
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('czk');

  return {
    usd,
    eur,
    uah,
    setUAH,
    setEUR,
    setUSD,
    isOpen,
    setIsOpen,
    currenciesRates,
    setCurrenciesRates,
    currentCurrency,
    setCurrentCurrency,
  };
};
