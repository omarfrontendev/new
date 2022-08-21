import React, { useState } from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { CgMathPlus } from "react-icons/cg";

export default function ResturantMealCard({ meal }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.res__mael__card__wrapper}>
      <div className={styles.card__left__side}>
        <div className={styles.meal__img__wrapper}>
          <img
            className={styles.meal__img}
            src={meal.img}
            alt="meal name"
          />
        </div>
        <div className={styles.meal__details}>
          <h2 className={styles.meal__name}>{meal.name}</h2>
          <p className={styles.meal__cats}>{meal.type}</p>
          <div className={styles.meal__facts}>
            <span className={styles.meal__rating}>
              <AiFillStar className={styles.star__icon} /> {meal.rating}
            </span>
            <span className={styles.meal__cooking__time}>
              <RiMotorbikeLine className={styles.bike__icon} />
              {meal.duration} MIN
            </span>
          </div>
        </div>
      </div>
      <div className={styles.card__right__side}>
        <div className={styles.meal__prices}>
          <span className={styles.old__price}>SAR {meal.oldPrice}</span>
          <span className={styles.current__price}>
            SAR <span className={styles.value}>{meal.currentPrice}</span>
          </span>
        </div>
        <div className={styles.add__cart__btn__wrapper}>
          <button className={styles.add__cart__btn}
            data-bs-toggle="modal"
            data-bs-target={`#add_item`}
          >
            <CgMathPlus />
          </button>
        </div>
      </div>
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
