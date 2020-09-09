import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./thankyou.scss";

export default function ThankYou() {
  const [data, setData] = useState([]);

  // hämtar sista id:t från databasen som sedan läggs in i "data" som sedan visas
  useEffect(() => {
    Axios.get("http://localhost:5000/thankyou").then((result) =>
      setData(result.data._id)
    );
  }, []);

  return (
    <div className="containerTH">
      <h2 className="thankyou">Tack för din bokning!</h2>
      <div className="bookingNR">Ditt bokningsnummer är : {data}</div>;
      <div className="greetings">Hälsningar</div>
      <h3 className="alviken">Alviken</h3>
    </div>
  );
}
