import {useMain} from "./useMain";
import styles from "./App.module.css";

export const HomePage = () => {

  const {parsedData, data, handleTextAreaChange, handleParse, handleCopyClick, childrenWrapperRef} = useMain()

  return (
    <div className={styles.container}>
      <textarea className={styles.text} value={data} onChange={handleTextAreaChange}/>

      <button onClick={handleParse} className={styles.button}>Parse</button>

      {parsedData &&
          <>
            <div className={styles.dataContainer} ref={childrenWrapperRef}>
              {parsedData.map(({sum, currency, categoryName}) => <div className={styles.dataWrap}>
                <span className={styles.item}>{sum}</span>
                <span className={styles.item}>{currency}</span>
                <span className={styles.item}>{categoryName}</span>
              </div>)}
            </div>
            <button className={styles.button} onClick={handleCopyClick}>Copy</button>
          </>
      }

    </div>
  )
}

