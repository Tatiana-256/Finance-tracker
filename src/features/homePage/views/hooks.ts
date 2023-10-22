import { useState } from 'react';
import { CZK } from '../constants';

export const useCurrency = () => {
  const [usd, setUSD] = useState(CZK.usd);
  const [eur, setEUR] = useState(CZK.eur);
  const [uah, setUAH] = useState(CZK.uah);

  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState<typeof CZK>(CZK);

  return {
    usd,
    eur,
    uah,
    setUAH,
    setEUR,
    setUSD,
    isOpen,
    setIsOpen,
    currency,
    setCurrency,
  };
};
