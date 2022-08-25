import React from "react";
import styles from "./.module.scss";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import MobFixedBar from "../components/MobFixedBar";
import ForgotPasswordModal from "../models/ForgotPasswordModal";

// POP UP MODALS
import MemberAreaForms from "../models/MemberAreaForms";
import ShippingPopUp from "../models/ShippingPopUp";
import SearchFilterPopUp from "../models/SearchFilterPopUp";
import CancelPoup from "../models/CancelPopUp";
import SupportPopUp from "../models/SupportPopUp";
import AddItemPopUp from "../models/AddItemPopUp";

export default function Layout({ children }) {

  return (
    <main className={styles.main__layout}>
      <Sidebar />
      <div className={styles.app__main__container}>
        <MainHeader logged={true} />
        <div className={styles.app__container}>
          <div className="container__wrapper">
            {children}
          </div>
        </div>
        <MobFixedBar />
      </div>
      <Footer />

      {/* POP UP MODALS */}
      <MemberAreaForms />
      <ShippingPopUp />
      <SearchFilterPopUp />
      <ForgotPasswordModal />
      <CancelPoup />
      <SupportPopUp />
      <AddItemPopUp />
    </main>
  );
}
