import React, { useEffect } from "react";
import axios from "axios";

interface IDataFromForm {
  userValue: any;
}
export default function ModalPost(props: IDataFromForm) {
  const { userValue } = props;

  useEffect(() => {
    axios
<<<<<<< HEAD
      .post("http://localhost:5000", { userValue })
      .then((res) => {
        console.log(res.data);
=======
      .post("http://localhost:5000/", userValue)
      .then((respone) => {
        console.log(respone.data);
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [userValue]);
<<<<<<< HEAD

  console.log(userValue);
=======
>>>>>>> 431aa9e4260599963d8d1a4dfcf3b83c59e5a027
  return <div></div>;
}
