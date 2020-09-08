import React, { useState } from 'react';
import axios from 'axios';

interface ISendData {
    updateValue(bookedUser: IBookedValue): void;
}

export interface IBookedValue {
    comment: string,
    date: string,
    timeslot: string,
    qty: number,
    gdpr: boolean,
    // table: number,
    name: string,
    email: string,
    phone: string,
    loading: boolean,
    submitSuccess: boolean,
};


export default function Create(props: ISendData) {
    let defaultValue: IBookedValue = {
        comment: '',
        date: '',
        timeslot: '',
        qty: 0,
        gdpr: false,
        // table: number,
        name: '',
        email: '',
        phone: '',
        loading: false,
        submitSuccess: false,
    };

    // console.log(defaultValue, "create2-2")

    const [bookedUser, setBookedUser] = useState(defaultValue)

const handleData = (e: any) => {
    setBookedUser({ ...bookedUser, [e.target.name]: e.target.value})
    axios.post("http://localhost:5000/admin/", defaultValue).then(
            response => {
                // console.log(response.data, "create2-3")
            })
}
const handleSubmit = (data: any) => {
    props.updateValue(bookedUser);
};
        return (
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="name"
                    name="name"
                    placeholder="Namn"
                    type="text"
                    value={bookedUser.name}
                    onChange={handleData}
                    required
                />
                <button type="submit"></button>
                </form>
            </div>
        ) };


    //         <div>
    //             <div className={"col-md-12 form-wrapper"}>
    //                 <h2> Lägg till Bokning </h2>
    //                 <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>

    //                     <div className="boxcontainer form-group col-md-12">
    //                         <div className="col-2 date">
    //                             <p className="dateheader"> DATUM </p>
    //                             <p className="dateinput">2020-10-01</p>
    //                             {/* <input
    //                                 type="date"
    //                                 className="dateinput"
    //                                 name="date"
    //                                 value="2020-10-01"
    //                                 onChange={(e) => this.handleChange(e)}
    //                             /> */}
    //                         </div>
    //                         <div className="timeslot col-4">
    //                             <p className="timeslotheader"> SITTNING </p>
    //                             <ul>
    //                                 <li>
    //                                     <label htmlFor="radio1">18:00
    //                                         <input
    //                                             className="timeslotone"
    //                                             type="radio"
    //                                             id="radio1"
    //                                             name="timeslot"
    //                                             value="18:00"
    //                                             checked={this.state.timeslot === "18:00"}
    //                                             onChange={(e) => this.handleChange(e)}
    //                                         />
    //                                     </label>
    //                                 </li>
    //                                 <li>
    //                                     <label htmlFor="radio2">21:00
    //                                         <input
    //                                             className="timeslotinput form-control"
    //                                             type="radio"
    //                                             id="radio2"
    //                                             name="timeslot"
    //                                             value="21:00"
    //                                             checked={this.state.timeslot === "21:00"}
    //                                             onChange={(e) => this.handleChange(e)}
    //                                             required
    //                                         />
    //                                     </label>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                             <label>
    //                         <div className="qty col-2">
    //                             <p className="qtyheader">ANTAL</p>
    //                             <select
    //                             name="qty"
    //                             onChange={e => this.handleChange(e)}
    //                             >
    //                                 <option value="0">0</option>
    //                                 <option value="1">1</option>
    //                                 <option value="2">2</option>
    //                                 <option value="3">3</option>
    //                                 <option value="4">4</option>
    //                                 <option value="5">5</option>
    //                                 <option value="6">6</option>
    //                             </select>
    //                         </div>
    //                             </label>
    //                     </div>
    //                     <div className="form-group col-md-12 ">
    //                         <input
    //                         type="text"
    //                         id="name"
    //                         onChange={(e) => this.handleChange(e)}
    //                         name="name"
    //                         className="form-control forminput"
    //                         placeholder="Namn" />
    //                     </div>
    //                     <div className="form-group col-md-12">
    //                         <input
    //                         type="email"
    //                         id="email"
    //                         onChange={(e) => this.handleChange(e)}
    //                         name="email"
    //                         className="form-control forminput"
    //                         placeholder="Email" />
    //                     </div>
    //                     <div className="form-group col-md-12">
    //                         <input type="text"
    //                             id="phone"
    //                             onChange={(e) => this.handleChange(e)}
    //                             name="phone"
    //                             className="form-control forminput"
    //                             placeholder="Telefon"
    //                         />
    //                     </div>
    //                     <div className="form-group col-md-12">
    //                         <input
    //                             type="text"
    //                             id="comment"
    //                             onChange={(e) => this.handleChange(e)}
    //                             name="comment"
    //                             className="form-control forminput"
    //                             placeholder="Kommentar"
    //                         />
    //                     </div>
    //                     <label>
    //                     <div className="form-group col-md-12 gdprbox">
    //                         <input
    //                             type="checkbox"
    //                             value={this.state.gdpr}
    //                             onChange={(e) => this.handleChange(e)}
    //                             name="gdpr"
    //                             className="form-control checkboxgdpr"
    //                             required
    //                         />
    //                         <p className="checkboxgdprtext"> * By clicking on this check box you agree that we handle your personal data in accordance with GDPR. You can read more about this under our Privacy Page.</p>
    //                     </div>
    //                         </label>
    //                     <div className="form-group col-md-4 pull-right">
    //                         <button className="btn btn-success" type="submit">
    //                             Boka
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //             <pre>{JSON.stringify(this.state, null, 3)}</pre>
    //         </div>
    //     });
    // };


