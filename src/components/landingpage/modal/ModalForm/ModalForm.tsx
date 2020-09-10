import React, { useState } from "react";
import "./ModalForm.scss";
import ModalGDPR from "./ModalGDPR/ModalGDPR";
import { Link } from "react-router-dom";
interface ISendFromForm {
  updateValue(bookingUser: IUserValue): void;
}
export interface IUserValue {
  name: string;
  phone: string;
  comment: string;
  email: string;
}

export default function ModalForm(props: ISendFromForm) {
  // tomt startvärde
  let defaultValue: IUserValue = {
    name: "",
    phone: "",
    comment: "",
    email: "",
  };
  // ändrar state från defaultValue till bookingUser när infon kommer in
  // samt kollar så att checkboxen är ifylld från ModalGDPR
  const [bookingUser, setbookingUser] = useState(defaultValue);
  const [, setcheckboxIsCheck] = useState({});
  const checkTheBox = (checkbox: boolean) => {
    setcheckboxIsCheck({ checkbox });
  };

  // hämtar värdena från inputfälten
  const handleData = (e: any) => {
    setbookingUser({ ...bookingUser, [e.target.name]: e.target.value });
  };
  // skickar datan till Modal (parent) och om det är ifyllt så kommer man till thankyou
  const handleSubmit = (e: any) => {
    props.updateValue(bookingUser);
    // e.preventDefault();
    // window.location.href = "/thankyou";
  };

  return (
    <div className="formDiv">
      <form className="userform">
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
          className="button"
          type="submit"
          onClick={handleSubmit}
          // disabled={!bookingUser}
        >
          <p>BOKA</p>
        </button>
        <Link to="/"><button className="button" type="submit"><p>TILLBAKA</p></button></Link>
      </form>
    </div>
  );
}
