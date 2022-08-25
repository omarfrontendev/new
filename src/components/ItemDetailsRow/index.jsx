import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { MenuIcon, InfoIcon } from "../../UI/icons";

export default function ItemDetailsRow({ active }) {
  return (
    <div className={styles.item__details__header__wrapper}>
      <ul className={styles.links__list}>
        <li className={styles.link__item}>
          <Link to={"/resturant-details"} className={`${styles.link} ${active === 'menu' ? styles.active__link : ''}`} >
            <MenuIcon />
            <span>menu</span>
          </Link>
        </li>
        <li className={styles.link__item}>
          <Link to={"/resturant-info"} className={`${styles.link} ${active === 'info' ? styles.active__link : ""}`}>
            <InfoIcon />
            <span>info</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
