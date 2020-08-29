import React, { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";
import ModalPost from "../ModalPost/ModalPost";
import ModalGDPR from "../ModalGDPR/ModalGDPR";

export default function Modal() {
  const [userValue, setuserValue] = useState([]);
  const updateValue = (bookingUser: never) => {
    setuserValue([...userValue, bookingUser]);
  };

  return (
    <div>
      <ModalForm updateValue={updateValue}></ModalForm>
      <ModalPost userValue={userValue}></ModalPost>
      <ModalGDPR></ModalGDPR>
    </div>
  );
}
