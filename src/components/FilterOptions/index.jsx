import React from "react";
import styles from "./.module.scss";
import { BsCheck } from "react-icons/bs";
import { BeverageIcon, DessertIcon, FoodIcon, OfferIcon } from "../../UI/icons";

export default function FilterOptions() {
  const sortedBy = [
    {
      id: "Delivery_Time",
      value: "Delivery Time",
    },
    {
      id: "Price_low_average",
      value: "Price (low and average)",
    },
    {
      id: "Top_rated",
      value: "Top rated",
    },
    {
      id: "Open_now",
      value: "Open now",
    },
  ];

  const cuisines = [
    {
      id: "Western_cuisines",
      value: "Western cuisines",
    },
    {
      id: "Indian_cuisines",
      value: "Indian cuisines",
    },
    {
      id: "Italian_cuisines",
      value: "Italian cuisines",
    },
    {
      id: "Japanese_cuisines",
      value: "Japanese cuisines",
    },
    {
      id: "Syrian_cuisines",
      value: "Syrian cuisines",
    },
  ];

  return (
    <form className={styles.options__container}>
      <div
        className={`${styles.options__header} d-flex align-items-center justify-content-between`}
      >
        <div className={styles.options__categories}>Categories</div>
        <button type="button" className={styles.options__Clear}>Clear All</button>
      </div>
      <div>
        <div className={`${styles.options__btns} d-flex align-items-center`}>
          <input className={styles.category__input} type="radio" id='food' value='food' name='categories' />
          <label
            htmlFor="food"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <FoodIcon />
            </span>
            <div className={styles.btn__word}>Food</div>
          </label>
          <input className={styles.category__input} type="radio" id='Beverages' value='Beverages' name='categories' />
          <label
            htmlFor="Beverages"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <BeverageIcon />
            </span>
            <div className={styles.btn__word}>Beverages</div>
          </label>
          <input className={styles.category__input} type="radio" id='Dessert' value='Desserts' name='categories' />
          <label
            htmlFor="Dessert"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <DessertIcon />
            </span>
            <div className={styles.btn__word}>Desserts</div>
          </label>
          <input className={styles.category__input} type="radio" id='Best__offers' value='Best__offers' name='categories' />
          <label
            htmlFor="Best__offers"
            className={`${styles.options__btn} d-flex align-items-center`}
          >
            <span
              className={`${styles.options__icon} d-flex align-items-center justify-content-center`}
            >
              <OfferIcon />
            </span>
            <div className={styles.btn__word}>Best offers</div>
          </label>
        </div>
        <div className={`${styles.options__sort}`}>
          <div className={styles.options__sort__content}>
            <div className={styles.options__sort__title}>Sort by</div>
            <div className={`${styles.options__checkboxes} d-flex flex-column`}>
              {sortedBy.map((input) => (
                <div
                  key={input.id}
                  className={`${styles.options__checkbox} d-flex align-items-center justify-content-between`}
                >
                  <label className={styles.label} htmlFor={input.id}>
                    {input.value}
                  </label>
                  <div className={`${styles.checkbox}`}>
                    <input
                      className={`${styles.input}`}
                      type="checkbox"
                      id={input.id}
                      name={input.id}
                      value={input.value}
                    />
                    <BsCheck className={styles.checked__icon} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.options__sort__content}>
            <div className={styles.options__sort__title}>Cuisines</div>
            <div className={`${styles.options__checkboxes} d-flex flex-column`}>
              {cuisines.map((input) => (
                <div
                  key={input.id}
                  className={`${styles.options__checkbox} d-flex align-items-center justify-content-between`}
                >
                  <label className={styles.label} htmlFor={input.id}>
                    {input.value}
                  </label>
                  <div className={`${styles.checkbox}`}>
                    <input
                      className={`${styles.input}`}
                      type="checkbox"
                      id={input.id}
                      name={input.id}
                      value={input.value}
                    />
                    <BsCheck className={styles.checked__icon} />
                  </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        <button className={styles.submit__form__btn} type="submit">
          Save and apply
        </button>
      </div>
    </form>
  );
}
