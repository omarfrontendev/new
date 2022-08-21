import React from 'react'
import styles from './.module.scss'
import { useLottie } from "lottie-react";
import animation from "./lf30_tddyeki4 (1).json";


export default function Loading() {

  const options = {
    animationData: animation,
    className: styles.lottie__animate,
    loop: true
  };

  const { View } = useLottie(options);


  return (
    <div className={styles.loading__container}>{View}</div>
  )
}
