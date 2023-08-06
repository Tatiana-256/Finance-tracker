import React, {createRef, useState} from "react";


type Categoty = { sum: number, currency: string, categoryName: string }
type ValueByCurrency = { sum: number, currency: string }
export const useMain = () => {

  const [data, setData] = useState('')
  const [parsedData, setParsedData] = useState<null | Categoty[]>(null)
  const [parsedDataByCurrency, setParsedDataByCurrency] = useState<null | ValueByCurrency[]>(null)

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value)
  }

  const handleParse = () => {
    const filteredData = data.split(/\r?\n/).map(el => el.split(' ')).filter(arr => arr.length > 2 && isNumericStr(arr[0]))

    const dict: Record<string, Categoty> = {}
    const dictByCurrency: Record<string, ValueByCurrency> = {}

    filteredData.forEach(el => {
      const key: string = el[1] + '_' + el[2];
      if (dict[key]) {
        dict[key].sum += Number(el[0])
      } else {
        dict[key] = {
          sum: Number(el[0]),
          currency: el[1],
          categoryName: el[2]
        }
      }

      const keyByCurrency: string =  el[1];
      if (dictByCurrency[keyByCurrency]) {
        dictByCurrency[keyByCurrency].sum += Number(el[0])
      } else {
        dictByCurrency[keyByCurrency] = {
          sum: Number(el[0]),
          currency: el[1]
        }
      }

    })
    setParsedData(Object.values(dict))
    setParsedDataByCurrency(Object.values(dictByCurrency))
  }

  console.log(data.split(/\r?\n/).map(el => el.split(' ')).filter(arr => arr.length > 2));


  const childrenWrapperRef = createRef<HTMLDivElement>();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(childrenWrapperRef?.current?.innerText || '');
  };

  return {data, parsedData, parsedDataByCurrency, handleTextAreaChange, handleParse, handleCopyClick, childrenWrapperRef}
}

const isNumericStr = (str: string) =>{
  return /^\d*\.?\d*$/.test(str);
}