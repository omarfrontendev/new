import React, { useState } from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";

export default function ResturantCard({ status, saleValue }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.resturant__card__wrapper}>
      <Link to={"/resturant-details"}>
        <div className={`${styles.resturant__card} ${styles[status]}`}>
          {(status === "new" || status === "discounted") && (
            <span className={styles.tag}>
              {status === "new" ? "NEW" : saleValue}
            </span>
          )}
          <div className={styles.closed__overlay}></div>
          <div className={styles.resturant__logo__wrapper}>
            <img
              className={styles.resturant__logo}
              src={"/assets/unnamed.png"}
              alt={"resturant_logo"}
            />
          </div>
          <h5 className={styles.resturant__name}>Burger King</h5>
          <span className={styles.resturant__categories}>
            Food • Deserts • Drinks
          </span>
          <div className={styles.resturant__facts}>
            <div className={styles.resturant__rating}>
              <AiFillStar className={styles.star__icon} />
              <span className={styles.rate__value}>4.5</span>
            </div>
            <div className={styles.resturant__rating}>
              <RiMotorbikeLine className={styles.bike__icon} />
              <span className={styles.rate__value}>20 MIN</span>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.like__btn__wrapper}>
        <button
          className={styles.meal__like__btn}
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <AiFillHeart className={styles.like__btn__icon} />
          ) : (
            <AiOutlineHeart className={styles.like__btn__icon} />
          )}
        </button>
      </div>
    </div>
  );
}
