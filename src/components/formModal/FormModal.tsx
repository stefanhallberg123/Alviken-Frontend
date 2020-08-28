import React from "react";
import "./formModal.scss";

export default function Formmodal() {
  return (
    <div className="formDiv">
      <form>
        <h1>Boka Bord</h1>

        <input className="name" name="name" placeholder="Namn" type="text" />
        <input
          className="email"
          name="email"
          placeholder="Email"
          type="email"
        />
        <input
          className="phone"
          name="phone"
          placeholder="Telefonnummer"
          type="number"
        />
        <textarea
          className="comment"
          name="comment"
          placeholder="Meddelande till resturangen"
        />
        <button type="button">BOKA</button>
      </form>
    </div>
  );
}
