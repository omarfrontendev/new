import React, { useEffect, useState } from "react";
import { NoteIcon, Star } from "../../UI/icons";
import { HiLocationMarker, HiPlus } from "react-icons/hi";
import { GoDash } from "react-icons/go";
import MenuDropDown from "../MenuDropDown";
import styles from "./.module.scss";
import Button from "../Button";
import CheckoutForm from "../CheckoutForm";

export default function CartDropdown({ notMenu, onClose, showHeader }) {
  const [restaurant, setRestaurant] = useState({});
  const [items, setItems] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [checkout, setCheckout] = useState(false)

  useEffect(
    () =>
      setRestaurant({
        name: "Pizza Hut",
        text: "Pizza Hut Food",
        img: "/assets/unnamed.png",
        rating: 4.8,
        address: "No 03, 4th Lane, Newyork",
      }),
    []
  );

  useEffect(
    () =>
      setItems([
        {
          id: 1,
          name: "Beef Burger",
          itemPrice: 150,
          amount: 2,
        },
        {
          id: 2,
          name: "Big Tisty",
          itemPrice: 150,
          price: 150,
          amount: 5,
        },
        {
          id: 3,
          name: "Pizza Large",
          itemPrice: 150,
          amount: 4,
        },
        {
          id: 4,
          name: "Pizza Large",
          itemPrice: 150,
          amount: 1,
        },
      ]),
    []
  );

  useEffect(
    () =>
      setPaymentDetails([
        {
          id: 1,
          detail: "Subtotal",
          value: 178.0,
        },
        {
          id: 2,
          detail: "Delivery fee",
          value: 19.0,
        },
      ]),
    []
  );

  const totalPaymentDratils = paymentDetails
    .map((p) => p.value)
    .reduce((a, b) => a + b, 0);


  if(cartEmpty) {
    return (
      <MenuDropDown notMenu={notMenu} onClose={onClose} showHeader={showHeader}>
        <div className={styles.empty__Cart}>
          <img className={styles.image} src="/assets/emptycart.png" alt="" />
        </div>
      </MenuDropDown>
    )
  }

  return (
    <MenuDropDown notMenu={notMenu} onClose={onClose} showHeader={showHeader}>
      <div className={styles.cartDropdown}>
        <div className={styles.header__dropdown}>
          <div className={`d-flex align-items-center ${styles.cart__header}`}>
            <div className={styles.header__image}>
              <img className={styles.image} src={restaurant?.img} alt="" />
            </div>
            <div className={styles.header__text}>
              <h4 className={styles.header__title}>{restaurant?.name}</h4>
              <div className={styles.subtitle}>{restaurant?.text}</div>
              <div className={`d-flex align-items-center ${styles.rating}`}>
                <Star />
                {restaurant?.rating}
              </div>
              <p className={`d-flex align-items-center ${styles.location}`}>
                <HiLocationMarker />
                {restaurant?.address}
              </p>
            </div>
          </div>
        </div>
        {!checkout && 
          <>
            <div className={styles.dropdown__content}>
              <div className={styles.items_cart_content}>
                <p className={styles.items_cart__title}>Items In Cart</p>
                <div className={` d-flex flex-column ${styles.items__cart}`}>
                  {items?.map((item) => (
                    <div
                      key={item.id}
                      className={` d-flex justify-content-between align-items-center ${styles.item__cart}`}
                    >
                      <span className={styles.item__name}>{item?.name}</span>
                      <div
                        className={`d-flex align-items-center ${styles.item_amount_control}`}
                      >
                        <button className={styles.remove}>
                          <GoDash />
                        </button>
                        <span className={styles.item__amount}>{item?.amount}</span>
                        <button className={styles.add}>
                          <HiPlus />
                        </button>
                      </div>
                      <div className={styles.item__price}>
                        {item?.amount * item.itemPrice}
                        <span className={styles.SAR}> SAR</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.note}>
                <p className={styles.note__title}>Add a note</p>
                <div className={`d-flex align-items-center ${styles.addd__note}`}>
                  <NoteIcon />
                  <input
                    className={styles.add_note__input}
                    type="text"
                    placeholder="Write anything"
                    name="add__note"
                  />
                  <button className={styles.save_note__btn}>Save</button>
                </div>
              </div>
              <div className={styles.payment_details_content}>
                <p className={styles.payment_details__title}>Payment Details</p>
                <div className={`d-flex flex-column ${styles.payment__details}`}>
                  {paymentDetails?.map((p) => (
                    <div
                      key={p.id}
                      className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
                    >
                      <p className={styles.details}>{p.detail}</p>
                      <span className={styles.value}>{p.value.toFixed(2)} SAR</span>
                    </div>
                  ))}
                  <div
                    className={`d-flex align-items-center justify-content-between ${styles.payment_details__row}`}
                  >
                    <p className={styles.details}>Total amount</p>
                    <span className={`${styles.value} ${styles.total}`}>
                      {totalPaymentDratils.toFixed(2)} SAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.cheackout__btn}`}
            >
              <Button onClick={() => (setCheckout(true))}>Checkout</Button>
            </div>
          </>
          }
          {checkout && <CheckoutForm setCheckout={setCheckout} />}
      </div>
    </MenuDropDown>
  );
}
