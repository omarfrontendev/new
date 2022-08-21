import React, { useState } from "react";
import { ImFacebook, ImGoogle } from "react-icons/im";
import styles from "./.module.scss";
import Modal from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import {
  EmailIcon,
  PasswordIcon,
  UserAdressIcon,
  UserMobileIcon,
  UserNameIcon,
} from "../../UI/icons";
import Input from "../../components/Input";

export default function MemberAreaForms() {
  const [loginForm, setLoginForm] = useState(true);
  const [data, setData] = useState({});

  const loginResources = [
    {
      id: "user__email",
      placeholder: "Email Address",
      type: "email",
      icon: <EmailIcon />,
    },
    {
      id: "user__password",
      placeholder: "Password",
      type: "password",
      icon: <PasswordIcon />,
    },
  ];
  const signUpResources = [
    {
      id: "user__name",
      placeholder: "Username",
      type: "text",
      icon: <UserNameIcon />,
    },
    {
      id: "user__email",
      placeholder: "Email Address",
      type: "email",
      icon: <EmailIcon />,
    },
    {
      id: "user__mobile_Number",
      placeholder: "Mobile Number",
      type: "text",
      icon: <UserMobileIcon />,
    },
    {
      id: "user__Address",
      placeholder: "Address",
      type: "text",
      icon: <UserAdressIcon />,
    },
    {
      id: "user__Password",
      placeholder: "Password",
      type: "password",
      icon: <PasswordIcon />,
    },
    {
      id: "Confirm_Password",
      placeholder: "Confirm Password",
      type: "password",
      icon: <PasswordIcon />,
    },
  ];

  return (
    <Modal maxWidth={"588px"} id={"member__area__modal"}>
      <div className={styles.member__area__modal}>
        <PopUpWrapper
          textStart={true}
          id={"member__area__modal"}
          title={"Member Area"}
        >
          <div className={styles.sign__form__container}>
            <div className={styles.Sign__form__content}>
              <div
                className={`${styles.sign__main} d-flex align-items-center justify-content-between`}
              >
                <div
                  className={`${styles.sign__type} d-flex flex-column align-items-start`}
                >
                  <div className={styles.sign__title}>
                    {loginForm ? "Sign In" : "Sign Up"}
                  </div>
                  <div className={styles.sign__subtitle}>
                    {loginForm
                      ? "Good to see you back ."
                      : "Create Account to continue!"}
                  </div>
                </div>
                <div className={`${styles.sign__btns} d-flex`}>
                  <button
                    className={`${styles.sign__btn} ${
                      loginForm ? styles.active : ""
                    }`}
                    onClick={() => setLoginForm(true)}
                  >
                    Sign In
                  </button>
                  <button
                    className={`${styles.sign__btn} ${
                      loginForm ? "" : styles.active
                    }`}
                    onClick={() => setLoginForm(false)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              {loginForm && (
                <div
                  className={`${styles.sign__with} d-flex align-items-center justify-content-between`}
                >
                  <div className={styles.sign__with__title}>Continue With</div>
                  <div className={`${styles.sign__with__btns} d-flex`}>
                    <button
                      className={`${styles.sign__with__btn} ${styles.facebook} d-flex align-items-center justify-content-start`}
                    >
                      <ImFacebook className={styles.icon__} /> Facebook
                    </button>
                    <button
                      className={`${styles.sign__with__btn} ${styles.google} d-flex align-items-center justify-content-start`}
                    >
                      <ImGoogle className={styles.icon__} /> Google
                    </button>
                  </div>
                </div>
              )}
              {loginForm && (
                <div className={`${styles.or} position-relative`}>Or</div>
              )}
              <form
                onSubmit={(e) => e.preventDefault()}
                className={styles.form__sign}
              >
                <div
                  className={`${styles.inputs__container} d-flex flex-column`}
                >
                  {loginForm &&
                    loginResources.map((input) => (
                      <Input
                        key={input.id}
                        placeholder={input.placeholder}
                        id={input.id}
                        icon={input.icon}
                        type={input.type}
                        value={input[input?.id]}
                        setValue={setData}
                        data={data}
                      />
                    ))}
                  {!loginForm &&
                    signUpResources.map((input) => (
                      <Input
                        placeholder={input.placeholder}
                        id={input.id}
                        icon={input.icon}
                        type={input.type}
                        value={input[input?.id]}
                        setValue={setData}
                        data={data}
                      />
                    ))}
                </div>
                <div className={styles.forgot__pass__link}>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target={`#forgot__password__modal`}
                    className={styles.forgot__pass__btn}
                  >
                    Forgot your password?
                  </button>
                </div>
                <button type="submit" className={styles.form__submit__btn}>
                  {loginForm ? "Login" : "Register"}
                </button>
              </form>
              <button
                className={styles.toggle__sign}
                onClick={() => setLoginForm((prev) => !prev)}
              >
                {loginForm
                  ? "Don't have an Account?"
                  : "Already have an Account?"}
                {loginForm ? (
                  <span className={styles.sign__}> Sign Up</span>
                ) : (
                  <div className={styles.sign__}> Login</div>
                )}
              </button>
            </div>
          </div>
        </PopUpWrapper>
      </div>
    </Modal>
  );
}
