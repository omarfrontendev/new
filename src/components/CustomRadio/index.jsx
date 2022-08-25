import React from 'react'

import styles from './.module.scss'

export default function CustomRadio({ id, type, text, name, setChecked, checked, setcheckedArray, checkedArray }) {


  const changeInputHandler = (e, id) => {
    if(e.target.type === 'radio') {
      setChecked(id);
    }else if(type === 'checkbox') {
      if(!checkedArray.includes(id)) {
        setcheckedArray([...checkedArray, id]);
      }else {
        const filter = checkedArray.filter(p => p !== id);
        setcheckedArray(filter);
      };
    }
  };

  const clickOnCustomeRadio = (id) => {
    if(type === 'radio') {
      setChecked(id)
    }else if(type === 'checkbox') {
      if(!checkedArray.includes(id)) {
        setcheckedArray([...checkedArray, id]);
      }else {
        const filter = checkedArray.filter(p => p !== id);
        setcheckedArray(filter);
      };
    }
  }

  return (
    <>
      <div className={`${styles.radio__container} d-flex align-item-center`}>
        <input 
          checked={type === 'radio' ? checked === id : checkedArray.includes(id)} 
          onChange={(e) => changeInputHandler(e, id)} 
          className={`d-none ${styles.input} `} 
          type={type} 
          name={name} 
          value={id} 
          id={id} 
        />
        <div 
          onClick={() => clickOnCustomeRadio(id)} 
          className={`${styles.input__check} ${checked === id || checkedArray?.includes(id) ? styles.active : ''}`}
        ></div>
        <label className={styles.label} htmlFor={id}>{text || id}</label>
      </div>
    </>
  )
}
