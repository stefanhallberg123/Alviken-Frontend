import React, { useState, useEffect } from "react";
import axios from "axios"
import "./formModal.scss";

export default function Formmodal() {

  const [bookingUser, setbookingUser] = useState({
    name: "", phone: "", comment: "", email: ""
  });

  const handleData = (e: any) => {
    setbookingUser({ ...bookingUser, [e.target.name]: e.target.value })
  };


  const sendData = (event: any) => {
    event.preventDefault();
  }
  useEffect(() => {
    axios.post('http://localhost:5000/', bookingUser).then(
      respone => {
        console.log(respone.data);
      }).catch(function (err) {
        console.log(err);
      })
  }, []);

  return (
    <div className="formDiv">
      <form onSubmit={sendData}>
        <h1>Boka Bord</h1>
        <input className="name"
          name="name"
          placeholder="Namn"
          type="text"
          value={bookingUser.name}
          onChange={handleData}
          required />
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
          placeholder="Meddelande till resturangen"
          value={bookingUser.comment}
          onChange={handleData}
        />
        <button id="normalbutton" type="submit">BOKA</button>
      </form>
    </div>
  );
}
