import React, { useState } from "react";
import Input from "../../components/Input";
import { PasswordIcon } from "../../UI/icons";
import styles from "./.module.scss";

export default function ResetPasswordPage() {
  const [data, setData] = useState({});

  const inputsResource = [
    {
      id: "new__password",
      placeholder: "New Password",
      type: "password",
    },
    {
      id: "confirm_password",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  return (
    <div className={styles.reset__pass__wrapper}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.reset__pass__container}
      >
        <div className={styles.reset__pass__title}>Reset Password</div>
        <div className={`${styles.reset__pass__inputs} d-flex flex-column`}>
          {inputsResource.map((input) => (
            <div className={styles.input__container}>
              <Input
                type={input?.type}
                placeholder={input?.placeholder}
                id={input?.id}
                value={data[input?.id] || ""}
                setValue={setData}
                data={data}
                icon={<PasswordIcon />}
              />
            </div>
          ))}
        </div>
        <button type="submit" className={styles.submit__btn}>
          Change
        </button>
      </form>
    </div>
  );
}
