import React from 'react'
import styles from './.module.scss'

export default function Button({ children, type, onClick, typeStyle }) {
  return (
    <button 
      className={`${styles.button} ${styles[typeStyle]}`} 
      type={type || 'button'} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}
