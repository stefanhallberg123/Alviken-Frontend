import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './editandremove.scss'
import AdminNav from './nav'

export interface IValues {
  name: string;
  date: string;
  email: string;
  phone: string;
  comment: string;
  timeslot: string;
  qty: number;
  gdpr: boolean;
}

export default function Create() {
  let defaultValue: IValues = {
    name: "",
    email: "",
    phone: "",
    comment: "",
    date: "",
    timeslot: "",
    qty: 0,
    gdpr: false,
  };

  const [bookedUser, setBookedUser] = useState(defaultValue);

  const handleBooking = (e: any) => {
    setBookedUser({ ...bookedUser, [e.target.name]: e.target.value });
    console.log(bookedUser, "createRakib");
  };

  const handleSubmit = (e: any) => {
    axios
      .post("http://localhost:5000/admin/create", bookedUser)
      .then((res) => {
        console.log(res.data, "Create1");
      })
        console.log(bookedUser, "Create2")

    }
    console.log(bookedUser)

return (
    <div className="App">
        <AdminNav></AdminNav>
        <h2>LÄGG TILL BOKNING</h2>
        <form id={"create-post-form"} className="form">
            <div className="boxcontainer form-group col-md-12">
                <div className="col-2 date">
                    <p className="dateheader">DATUM </p>
                    <p className="dateinput">2020-10-01</p>
                </div>
                <div className="timeslot col-4">
                    <p className="timeslotheader"> SITTNING </p>

                    <div className="radio-toolbar">
                        <input
                            className="timeslotone"
                            type="radio"
                            id="radio1"
                            name="timeslot"
                            checked={bookedUser.timeslot === "18:00"}
                            value={'18:00'}
                            onChange={handleBooking}
                            required
                        />
                        <p>&nbsp;</p>
                        <label htmlFor="radio1">18:00</label>
                        <input
                            className="timeslotone"
                            type="radio"
                            id="radio2"
                            name="timeslot"
                            checked={bookedUser.timeslot === "21:00"}
                            value={'21:00'}
                            onChange={handleBooking}
                            required/>
                        <label htmlFor="radio2">21:00</label>
                    </div>
                </div>
                <label>
                    <div className="qtybox col-2">
                        <p className="qtyheader">ANTAL</p>
                        <select
                            name="qty"
                            value={bookedUser.qty}
                            onChange={handleBooking}
                            required
                            >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </label>
            </div>

            <div className="form-group col-md-12 ">
                <input
                    type="text"
                    id="name"
                    value={bookedUser.name}
                    onChange={handleBooking}
                    name="name"
                    className="form-control forminput"
                    placeholder="Namn"
                    required/>
            </div>
            <div className="form-group col-md-12">
                <input
                    type="email"
                    id="email"
                    value={bookedUser.email}
                    onChange={handleBooking}
                    name="email"
                    className="form-control forminput"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="form-group col-md-12">
                <input type="text"
                    id="phone"
                    value={bookedUser.phone}
                    onChange={handleBooking}
                    name="phone"
                    className="form-control forminput"
                    placeholder="Telefon"
                    required/>
            </div>
            <div className="form-group col-md-12">
                <input type="text"
                    id="comment"
                    value={bookedUser.comment}
                    onChange={handleBooking}
                    name="comment"
                    className="form-control forminput"
                    placeholder="Kommentar"
                    required/>
            </div>
                <label>
            <div className="form-group col-md-12 gdprbox">
                <input
                    type="checkbox"
                    onChange={handleBooking}
                    name="gdpr"
                    className="form-control checkboxgdpr"
                    required
                />
                <p className="checkboxgdprtext">
                * By clicking on this check box you agree that we handle your personal data in accordance with GDPR. You can read more about this under our Privacy Page.
                </p>
            </div>
                </label>
            <div className="form-group col-md-4 pull-right">
                <button className="btn" type="submit" onClick={handleSubmit}>
                    <p>Boka</p>
                </button>
                <Link to='/admin' ><button className="btn" type="submit">
                    <p>Tillbaka</p>
                </button></Link>
                <pre>
                    {JSON.stringify(bookedUser, null, 3)}
                </pre>

            </div>
    </form>
</div>
)};
