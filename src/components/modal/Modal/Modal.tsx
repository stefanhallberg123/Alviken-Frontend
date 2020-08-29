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
<<<<<<< HEAD
      <ModalPost userValue={userValue}></ModalPost>
      <ModalGDPR></ModalGDPR>
=======
      <ModalGDPR></ModalGDPR>
      <ModalPost userValue={userValue}></ModalPost>
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
    </div>
  );
}
