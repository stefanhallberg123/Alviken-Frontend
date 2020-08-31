import React, { useState } from "react";
import ModalForm, { IStartValue } from "../ModalForm/ModalForm";
import ModalPost from "../ModalPost/ModalPost";
import ModalGDPR from "../ModalGDPR/ModalGDPR";

export default function Modal() {
  const [userValue, setuserValue] = useState({});
  const updateValue = (bookingUser: IStartValue) => {
    setuserValue({ bookingUser });
    console.log(bookingUser);
  };

  return (
    <div>
      <ModalForm updateValue={updateValue}></ModalForm>
      <ModalPost userValue={userValue}></ModalPost>
      <ModalGDPR></ModalGDPR>
    </div>
  );
}
