import React, { useState } from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function ResSumCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.res__summary__card__wrapper}>
      <Link to={"/resturant-details"}>
        <div className={styles.res__summary__card}>
          <div className={styles.res__img__wrapper}>
            <img
              className={styles.resturant__logo}
              src={"/assets/unnamed.png"}
              alt={"resturant_logo"}
            />
          </div>
          <h6 className={styles.res__name}>Papa john's</h6>
          <div className={styles.res__rate}>
            <AiFillStar className={styles.star__icon} />
            <span className={styles.rate__value}>4.5</span>
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
