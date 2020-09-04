import React, { useState } from "react";
import "./ModalForm.scss";
import ModalGDPR from "./ModalGDPR/ModalGDPR";

interface ISendFromForm {
  updateValue(bookingUser: IUserValue): void;
}
interface ICheckboxCheck {
  setcheckboxIsCheck(checkbox: boolean): void;
}
export interface IUserValue {
  name: string;
  phone: string;
  comment: string;
  email: string;
}

export default function ModalForm(props: ISendFromForm) {
  let defaultValue: IUserValue = {
    name: "",
    phone: "",
    comment: "",
    email: "",
  };

  const [bookingUser, setbookingUser] = useState(defaultValue);
  const [, setcheckboxIsCheck] = useState({});
  const checkTheBox = (checkbox: boolean) => {
    setcheckboxIsCheck({ checkbox });
  };

  const handleData = (e: any) => {
    setbookingUser({ ...bookingUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (data: any) => {
    props.updateValue(bookingUser);
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <h1>Boka Bord</h1>
        <input
          className="name"
          name="name"
          placeholder="Namn"
          type="text"
          value={bookingUser.name}
          onChange={handleData}
          required
        />
        <input
          className="email"
          name="email"
          placeholder="Email"
          type="email"
          value={bookingUser.email}
          onChange={handleData}
          required
        />
        <input
          className="phone"
          name="phone"
          placeholder="Telefonnummer"
          type="number"
          value={bookingUser.phone}
          onChange={handleData}
          required
        />
        <textarea
          className="comment"
          name="comment"
          placeholder="Meddelande till restaurangen"
          value={bookingUser.comment}
          onChange={handleData}
        />
        <ModalGDPR sendCheckbox={checkTheBox}></ModalGDPR>
        <button
          disabled={!bookingUser && !checkTheBox}
          id="normalbutton"
          type="submit"
        >
          BOKA
        </button>
      </form>
    </div>
  );
}
