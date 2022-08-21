import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import MenuDropDown from "../MenuDropDown";
import styles from "./.module.scss";

function NotificationsDropdown({ notMenu, onClose, showHeader }) {
  const [active, setActive] = useState("all");

  const [notifications, setNotifications] = useState([]);
  const [emptyMenu, setEmptyMeun] = useState(true)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const DUMMY__notifcations = [
    {
      id: 1,
      title: "Your orders has been picked up.....",
      date: "Now",
      seen: false,
    },
    {
      id: 2,
      title: "Your orders has been picked up",
      date: "Now",
      seen: true,
    },
    {
      id: 3,
      title: "Your orders has been picked up",
      date: "Now",
      seen: false,
    },
    {
      id: 4,
      title: "Your orders has been picked up",
      date: "Now",
      seen: false,
    },
    {
      id: 5,
      title: "Your orders has been picked up",
      date: "Now",
      seen: true,
    },
    {
      id: 6,
      title: "Your orders has been picked up",
      date: "Now",
      seen: false,
    },
    {
      id: 7,
      title: "Your orders has been picked up",
      date: "Now",
      seen: true,
    },
    {
      id: 8,
      title: "Your orders has been picked up",
      date: "Now",
      seen: false,
    },
  ];

  useEffect(
    () => setNotifications(DUMMY__notifcations),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (active === "all") {
      setNotifications(DUMMY__notifcations);
    } else if (active === "unread") {
      setNotifications(DUMMY__notifcations.filter((n) => !n.seen));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if(emptyMenu) {
    return (
      <MenuDropDown notMenu={notMenu} onClose={onClose} showHeader={showHeader}>
        <div className={styles.empty__menu}>
          <img className={styles.image} src="/assets/emptynotifications.png" alt="" />
        </div>
      </MenuDropDown>
    )
  }

  return (
    <MenuDropDown notMenu={notMenu} onClose={onClose} showHeader={showHeader}>
      <div className={styles.notification__Dropdown}>
        <div className={styles.header__dropdown}>
          <div
            className={`d-flex align-items-center justify-content-between ${styles.notification__header}`}
          >
            <div className={`d-flex align-items-center ${styles.left__header}`}>
              <button
                className={`${styles.btn} 
              ${active === "all" ? styles.active : ""}`}
                onClick={() => setActive("all")}
              >
                All
              </button>
              <button
                className={`${styles.btn} 
              ${active === "unread" ? styles.active : ""}`}
                onClick={() => setActive("unread")}
              >
                Unread
              </button>
            </div>
            <div className={styles.right__header}>
              <BiDotsHorizontalRounded />
            </div>
          </div>
        </div>
        <div className={styles.notifications}>
          {notifications?.map((n) => (
            <div
              key={n.id}
              className={`d-flex ${styles.signle__notificate} ${
                n.seen ? "" : styles.not__seen
              }`}
            >
              <div className={styles.notificate__icon}>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.notificate__content}>
                <p className={styles.notificate__title}>{n.title}</p>
                <span className={styles.notificate__date}>{n.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MenuDropDown>
  );
}

export default NotificationsDropdown;
