import React, { useState } from "react";
import "./ModalGDPR.scss";

interface IUpdateCheck {
  sendCheckbox(checked: boolean): void;
}

export default function ModalGDPR(props: IUpdateCheck) {
  const [checked, setChecked] = useState(false);
  // checkboxen är false först och med handleClick så togglas datan och det skickas sedan till modalform(parent)
  function handleClick() {
    setChecked(!checked);
    props.sendCheckbox(checked);
  }

  return (
    <div className="gdprDiv">
      <div className="gdprText">
        * By clicking on this checkbox you agree that we handle your personal
        data in accordance with GDPR. You can read more about this under our
        Privacy Page.
      </div>
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        required
      ></input>
    </div>
  );
}
