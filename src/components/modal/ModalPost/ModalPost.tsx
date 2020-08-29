import React, { useEffect } from "react";
import axios from "axios";

interface IDataFromForm {
  userValue: any;
}
export default function ModalPost(props: IDataFromForm) {
  const { userValue } = props;

  useEffect(() => {
    axios
      .post("http://localhost:5000", { userValue })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [userValue]);

  console.log(userValue);
  return <div></div>;
}
