import React, { useState } from "react";
import ModalForm, { IStartValue } from "../ModalForm/ModalForm";
import ModalGDPR from "../ModalGDPR/ModalGDPR";
import axios from "axios";

export default function Modal() {
  const [userValue, setuserValue] = useState({});
  const updateValue = (bookingUser: IStartValue) => {
    setuserValue({ bookingUser });
    axios.post("http://localhost:5000/", bookingUser).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <ModalForm updateValue={updateValue}></ModalForm>
      <ModalGDPR></ModalGDPR>
    </div>
  );
}
