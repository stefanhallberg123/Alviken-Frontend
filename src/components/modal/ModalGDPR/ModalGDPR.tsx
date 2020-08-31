import React, { useState } from "react";
import "./ModalGDPR.scss";
export default function ModalGDPR() {
  const [checkbox, setcheckbox] = useState(false);

  return (
    <div>
      <input className="checkBox" type="checkbox" required></input>
      <p>
        * By clicking on this check box you agree that we handle your personal
        data in accordance with GDPR. You can read more about this under our
        <b>Privacy Page.</b>
      </p>
    </div>
  );
}
