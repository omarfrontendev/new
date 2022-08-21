import React from "react";
import styles from "./.module.scss";

export default function ResturantCategoriesList({ setCurrentActive, currentActive, categories }) {

  return (
    <div className={styles.category__container}>
      <div className={styles.title}>Categories</div>
        <ul className={`${styles.categories} d-flex flex-column`}>
          {categories.map((c) => (
            <li
              key={c.id}
              className={`${styles.category} ${
                currentActive === c.id ? styles.active : ""
              }`}
            >
              <button
                className={styles.categ__btn}
                onClick={() => currentActive === c.id ? setCurrentActive('') : setCurrentActive(c.id)}
                data-bs-toggle="collapse"
                data-bs-target={`#${c.id}`}
                aria-expanded="false"
                aria-controls={c.id}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
}
