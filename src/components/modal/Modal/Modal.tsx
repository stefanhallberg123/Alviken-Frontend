import React, { useState } from "react";
import ModalForm, { IUserValue } from "../ModalForm/ModalForm";
import axios from "axios";
import "./Modal.scss";

export default function Modal() {
  // hämtar datan från ModalForm och skickan in det i setUserValue
  const [, setuserValue] = useState({});
  const updateValue = (bookingUser: IUserValue) => {
    setuserValue({ bookingUser });
    //Skickar datan till databasen
    axios.post("http://localhost:5000/", bookingUser).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <ModalForm updateValue={updateValue}></ModalForm>
    </div>
  );
}
