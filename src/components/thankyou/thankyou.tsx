import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./thankyou.scss";
export default function ThankYou() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/thankyou").then((result) =>
      setData(result.data)
    );
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, i) => (
          <li className="" key={i}>
            {item._id}
          </li>
        ))}
      </ul>
    </div>
  );
}
