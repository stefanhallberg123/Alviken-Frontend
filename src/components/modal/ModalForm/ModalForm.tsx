import React, { useState } from "react";

interface ISendFromForm {
  updateValue(bookingUser: any): void;
}

export default function ModalForm(props: ISendFromForm) {
  const { updateValue } = props;

<<<<<<< HEAD
  const startValue = {
=======
  const [bookingUser, setbookingUser] = useState({
    table: "",
    qty: "",
    timeslot: "",
    date: "",
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
    name: "",
    phone: "",
    comment: "",
    email: "",
<<<<<<< HEAD
  };

  const [bookingUser, setbookingUser] = useState(startValue);
  const { name, phone, comment, email } = bookingUser;

  const handleData = (e: any) => {
    e.persist();
=======
  });

  const handleData = (e: any) => {
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
    setbookingUser({ ...bookingUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    updateValue(bookingUser);
<<<<<<< HEAD
    e.preventDefault();
=======
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
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
<<<<<<< HEAD
          value={name}
=======
          value={bookingUser.name}
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
          onChange={handleData}
          required
        />
        <input
          className="email"
          name="email"
          placeholder="Email"
          type="email"
<<<<<<< HEAD
          value={email}
=======
          value={bookingUser.email}
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
          onChange={handleData}
          required
        />
        <input
          className="phone"
          name="phone"
          placeholder="Telefonnummer"
          type="number"
<<<<<<< HEAD
          value={phone}
=======
          value={bookingUser.phone}
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
          onChange={handleData}
          required
        />
        <textarea
          className="comment"
          name="comment"
          placeholder="Meddelande till restaurangen"
<<<<<<< HEAD
          value={comment}
=======
          value={bookingUser.comment}
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
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
