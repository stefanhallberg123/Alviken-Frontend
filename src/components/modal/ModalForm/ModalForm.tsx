import React, { useState } from "react";

interface ISendFromForm {
  updateValue(bookingUser: any): void;
}
export interface IStartValue {
  name: string;
  phone: string;
  comment: string;
  email: string;
}

export default function ModalForm(props: ISendFromForm) {
  const { updateValue } = props;

  let defaultValue: IStartValue = {
    name: "",
    phone: "",
    comment: "",
    email: "",
  };

  const [bookingUser, setbookingUser] = useState(defaultValue);

  const handleData = (e: any) => {
    setbookingUser({ ...bookingUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    updateValue(bookingUser);
    e.preventDefault();
    console.log(bookingUser);
  };

  return (
    <div className="formDiv">
      <form>
        <h1>Boka Bord</h1>
        <input
          className="name"
          name="name"
          placeholder="Namn"
          type="text"
          value={bookingUser.email}
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
          required
        />
        <button id="normalbutton" onClick={handleSubmit} type="submit">
          BOKA
        </button>
      </form>
    </div>
  );
}
