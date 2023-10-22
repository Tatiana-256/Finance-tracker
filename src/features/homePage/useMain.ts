import React, { createRef, useState } from 'react';
import { Category, Currency, UserCurrency, ValueByCurrency } from './types';
import { CZK } from './constants';

export const useMain = (currency: typeof CZK) => {
  const [data, setData] = useState('');

  const [parsedDataByCategory, setParsedDataByCategory] = useState<null | Category[]>(null);
  const [parsedDataByCurrency, setParsedDataByCurrency] = useState<null | ValueByCurrency[]>(null);
  const [totalCZ, setTotalCZ] = useState<null | number>(null);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  const handleParse = () => {
    const dividedStringByEnter = data.split(/\r?\n/);

    const filteredData = dividedStringByEnter
      .map((el) => el.split(' '))
      .filter((arr) => !isNaN(Number(arr[0])) && Number(arr[0]) !== 0);

    const dict: Record<string, Category> = {};
    const dictByCurrency: Record<string, ValueByCurrency> = {};

    filteredData.forEach((el) => {
      const key: string = el[1] + '_' + el[2];
      if (dict[key]) {
        dict[key].sum += Number(el[0]);
      } else {
        dict[key] = {
          sum: Number(el[0]),
          currency: el[1] as UserCurrency,
          categoryName: el[2],
        };
      }

      const keyByCurrency: string = el[1];
      if (dictByCurrency[keyByCurrency]) {
        dictByCurrency[keyByCurrency].sum += Number(el[0]);
      } else {
        dictByCurrency[keyByCurrency] = {
          sum: Number(el[0]),
          currency: el[1] as UserCurrency,
        };
      }
    });

    setParsedDataByCategory(Object.values(dict));
    setParsedDataByCurrency(Object.values(dictByCurrency));
    calculateTotalSumByCurrency(filteredData);
  };

  const childrenWrapperRef = createRef<HTMLDivElement>();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(childrenWrapperRef?.current?.innerText || '');
  };

  function convertSum(data: string[]) {
    if (data[1] === 'cz') {
      return Number(data[0]);
    }
    if (data[1] === 'e') {
      return Number(data[0]) * Number(CZK.eur);
    }
    if (data[1] === 'usd') {
      return Number(data[0]) * Number(CZK.usd);
    }
    if (data[1] === 'ua') {
      return Number(data[0]) * Number(CZK.uah);
    }
    return 0;
  }

  function calculateTotalSumByCurrency(data: string[][], currency: Currency = 'czk') {
    const total = data.reduce((prev, current) => prev + convertSum(current), 0);
    setTotalCZ(total);
  }

  return {
    data,
    parsedData: parsedDataByCategory,
    handleTextAreaChange,
    handleParse,
    handleCopyClick,
    childrenWrapperRef,
    parsedDataByCurrency,
    totalCZ,
  };
};
