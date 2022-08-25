import React from 'react'
import Modal from '../../components/Modal'
import PopUpWrapper from '../../components/PopUpWrapper'

import styles from './.module.scss'

export default function CancelPoup() {
  return (
    <Modal maxWidth="696px" id='cancel__modal'>
      <PopUpWrapper
        title='Cancelling order!'
        id='cancel__modal'
        textStart={true}
        >
        <div className={styles.cancel__content}>
          <p className={styles.cancel__ph}>Are you sure to cancel your order?</p>
          <div className={`d-flex align-items-center justify-content-center ${styles.btns}`}>
            <button className={`${styles.btn} ${styles.btn__sure} btn btn-danger`}
            >
              Sure
            </button>
            <button className={`${styles.btn} ${styles.btn__close} btn btn-primary`}
            >
              Close
            </button>
          </div>
        </div>
      </PopUpWrapper>
    </Modal>
  )
}
