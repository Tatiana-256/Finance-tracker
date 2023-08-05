import React, {createRef, useState} from "react";


type Categoty = { sum: number, currency: string, categoryName: string }
export const useMain = () => {

  const [data, setData] = useState('')
  const [parsedData, setParsedData] = useState<null | Categoty[]>(null)

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value)
  }

  const handleParse = () => {
    const filteredData = data.split(/\r?\n/).map(el => el.split(' ')).filter(arr => arr.length > 2)

    const dict: Record<string, Categoty> = {}

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

    })
    setParsedData(Object.values(dict))
  }

  console.log(data.split(/\r?\n/).map(el => el.split(' ')).filter(arr => arr.length > 2));


  const childrenWrapperRef = createRef<HTMLDivElement>();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(childrenWrapperRef?.current?.innerText || '');
  };

  return {data, parsedData, handleTextAreaChange, handleParse, handleCopyClick, childrenWrapperRef}
}
