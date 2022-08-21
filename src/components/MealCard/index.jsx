import React, { useState } from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CgTimer } from "react-icons/cg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function MealCard({ img }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.meal__card__wrapper}>
      <div className={styles.meal__like__btn__wrapper}>
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
      <Link to={"/resturant-details"} className={styles.meal__card}>
        {/* <a className={styles.meal__card} href="/resturant-details"> */}
          <div className="row g-0 w-100">
            <div className="col">
              <div className={styles.meal__description__wrapper}>
                <h3 className={styles.meal__title}>Jumbo Shrimp Meal</h3>
                <p className={styles.resturant__name}>Albaik Restaurant</p>
                <span className={styles.meal__dish}>Western Food</span>
                <div className={styles.meal__facts}>
                  <div className={styles.meal__rating}>
                    <AiFillStar className={styles.rating__icon} />
                    <span className={styles.meal__rate__value}>4.23</span>
                  </div>
                  <div className={styles.meal__rating}>
                    <CgTimer className={"a"} />
                    <span className={styles.meal__rate__value}>25 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={styles.meal__image_wrapper}>
              <img className={styles.meal__img} src={img} alt="meal_image" />
            </div>
          </div>
        {/* </a> */}
      </Link>
    </div>
  );
}
