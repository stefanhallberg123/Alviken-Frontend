import React, { useEffect } from "react";
import axios from "axios";

interface IDataFromForm {
  userValue: any;
}
export default function ModalPost(props: IDataFromForm) {
  const { userValue } = props;

  useEffect(() => {
    axios
      .post("http://localhost:5000/", userValue)
      .then((respone) => {
        console.log(respone.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [userValue]);
  return <div></div>;
}
