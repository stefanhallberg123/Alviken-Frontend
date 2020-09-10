import React, { useState } from "react";
import axios from "axios";
import "./Modal.scss";
import ModalForm, { IUserValue } from "./../ModalForm/ModalForm";

export interface IModalProps {
  date: Date;
  time: string;
  people: string;
}

export default function Modal(props: IModalProps) {
  // hämtar datan från ModalForm och skickan in det i setUserValue

  let userDefaultValue: IUserValue = {
    name: "",
    phone: "",
    comment: "",
    email: "",
  };
  const [userValue, setuserValue] = useState(userDefaultValue);
  const updateValue = (bookingUser: IUserValue) => {
    setuserValue(bookingUser);
    let datatoSend = {
      bookingData: props,
      userData: bookingUser,
    };

    //Skickar datan till databasen
    axios.post("http://localhost:5000/", datatoSend).then((response) => {
      console.log(response.data);
    });
    console.log(datatoSend);
  };
  return (
    <div>
      <ModalForm updateValue={updateValue}></ModalForm>
    </div>
  );
}
