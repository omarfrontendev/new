import React from "react";
import styles from "./.module.scss";

export default function ResturantInfoList() {
  const meal = {
    name: "Pizza Hut",
    data: [
      {
        key: "Minimum Order Amount",
        value: "EGP 0.00",
      },
      {
        key: "Working Hours",
        value: "11:00AM - 4:30AM",
      },
      {
        key: "Delivery Time",
        value: "45 mins",
      },
      {
        key: "Delivery fee",
        value: "EGP 20.00",
      },
      {
        key: "Rating",
        value: "4/5",
      },
      {
        key: "Cuisines",
        value: "Cuisines",
      },
    ],
  };

  return (
    <div className={styles.info__container}>
      <div className={styles.title}>{meal.name}</div>
      <div className={`${styles.data__container} d-flex flex-column`}>
        {meal.data.map((m, i) => (
          <div
            key={i}
            className={`${styles.signle__row} d-flex justify-content-between`}
          >
            <span className={styles.data__key}>{m.key}</span>
            <span className={styles.data__value}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
