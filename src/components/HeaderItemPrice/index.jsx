import React from 'react'
import { GoDash } from 'react-icons/go'
import { HiPlus } from 'react-icons/hi'
import styles from './.module.scss'

export default function HeaderItemPrice() {
  return (
    <div className={`${styles.item__price__container} d-flex align-items-center justify-content-between`}>
      <div className={`${styles.item__title} d-flex flex-column`}>
        <div className={styles.title}>Double Medium Deal</div>
        <div className={styles.subtitle}>2 Medium Pizzas of your choice + 1 potato wedges</div>
      </div>
      <div className={`${styles.item__price__content} d-flex align-items-center justify-content-between`}>
        <div className={`d-flex align-items-center ${styles.item_amount_control}`}>
          <button className={styles.remove}><GoDash /></button>
          <span className={styles.item__amount}>1</span>
          <button className={styles.add}><HiPlus /></button>
        </div>
        <div className={`${styles.item__price} d-flex align-items-center`}>
          <div className={styles.price__word}>Price:</div>
          <div className={`${styles.item__price} d-flex flex-column align-items-center justify-content-center`}>
            <div className={styles.last__price}>SAR 50</div>
            <div className={styles.new__price}><span className={styles.SAR}>SAR</span> 100</div>
          </div>
        </div>
      </div>
    </div>
  )
}
