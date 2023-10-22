import React, { createRef, useState } from 'react';
import { Category, ValueByCurrency } from './types';
import { CZK } from './constants';

export const useMain = (currency: typeof CZK) => {
  const [data, setData] = useState('');
  const [parsedData, setParsedData] = useState<null | Category[]>(null);
  const [parsedDataByCurrency, setParsedDataByCurrency] = useState<null | ValueByCurrency[]>(null);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  console.log(currency);

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
          currency: el[1],
          categoryName: el[2],
        };
      }

      const keyByCurrency: string = el[1];
      if (dictByCurrency[keyByCurrency]) {
        dictByCurrency[keyByCurrency].sum += Number(el[0]);
      } else {
        dictByCurrency[keyByCurrency] = {
          sum: Number(el[0]),
          currency: el[1],
        };
      }
    });
    setParsedData(Object.values(dict));
    setParsedDataByCurrency(Object.values(dictByCurrency));
  };

  const childrenWrapperRef = createRef<HTMLDivElement>();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(childrenWrapperRef?.current?.innerText || '');
  };

  return {
    data,
    parsedData,
    handleTextAreaChange,
    handleParse,
    handleCopyClick,
    childrenWrapperRef,
    parsedDataByCurrency,
  };
};
