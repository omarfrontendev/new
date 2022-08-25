import React from "react";
import PopUpWrapper from "../../components/PopUpWrapper";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { EmailIcon } from "../../UI/icons";

export default function ForgotPasswordModal() {

  const [data, setData] = useState({})

  return (
    <Modal maxWidth={"588px"} id={"forgot__password__modal"}>
      <div className={"forgot__password__area__modal"}>
        <PopUpWrapper
          // textStart={true}
          id={"forgot__password__modal"}
          title={"Forgot Password"}
        >
          <form className='d-flex flex-column p-4' style={{rowGap: '20px'}}>
            <Input 
              placeholder='Email Address'
              type={"email"}
              id='forgot_password'
              data={data}
              setValue={setData}
              value={data.id}
              icon={<EmailIcon />}
            />
            <Button>reset</Button>
          </form>
        </PopUpWrapper>
      </div>
    </Modal>
  );
}
