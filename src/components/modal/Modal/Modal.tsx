import React, { useState } from "react";
import ModalForm, { IUserValue } from "../ModalForm/ModalForm";
import axios from "axios";
import "./Modal.scss";
import reactmodal from "react-modal";

export default function Modal() {
  const [modalIsOpen, setlIsOpen] = useState(true);

  function closeModal() {
    setlIsOpen(false);
    console.log("stänger modalen");
  }

  const [, setuserValue] = useState({});
  const updateValue = (bookingUser: IUserValue) => {
    setuserValue({ bookingUser });

    axios.post("http://localhost:5000/", bookingUser).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <div className="modalBtn" onClick={closeModal}>
        X
      </div>
      <ModalForm updateValue={updateValue}></ModalForm>
    </div>
  );
}
