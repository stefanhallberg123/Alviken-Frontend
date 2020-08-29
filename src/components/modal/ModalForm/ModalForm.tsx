import React, { useState } from "react";

interface ISendFromForm {
  updateValue(bookingUser: any): void;
}

export default function ModalForm(props: ISendFromForm) {
  const { updateValue } = props;

  const startValue = {
    name: "",
    phone: "",
    comment: "",
    email: "",
  };

  const [bookingUser, setbookingUser] = useState(startValue);
  const { name, phone, comment, email } = bookingUser;

  const handleData = (e: any) => {
    e.persist();
    setbookingUser({ ...bookingUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    updateValue(bookingUser);
    e.preventDefault();
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
          value={name}
          onChange={handleData}
          required
        />
        <input
          className="email"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleData}
          required
        />
        <input
          className="phone"
          name="phone"
          placeholder="Telefonnummer"
          type="number"
          value={phone}
          onChange={handleData}
          required
        />
        <textarea
          className="comment"
          name="comment"
          placeholder="Meddelande till restaurangen"
          value={comment}
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
