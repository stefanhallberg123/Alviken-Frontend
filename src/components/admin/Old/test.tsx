import React, { useState } from "react";
import "./form.scss";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IBookedForm {
    updateValue(bookedUser: any): void;
    // customerId: string,
    // name: string, 
    // phone: string,
    // email: string,
    // comment: string,
    // date: Date,
    // timeslot: string,
    // qty: string,
    // gdpr: boolean,
    // // table: number,
}

export interface IStartValue {
    name: '',
    phone: '',
    email: '',
    comment: '',
    // date: Date,
    timeslot: '',
    qty: "1",
    gdpr: false,
    // table: '',
    loading: boolean,
    submitSuccess: boolean,
}

export default function Form(props: IBookedForm) {
  let defaultValue: IStartValue = {
    name: '',
    phone: '',
    email: '',
    comment: '',
    // date: '',
    timeslot: '',
    qty: "1",
    // table: '',
    gdpr: false,
    loading: false,
    submitSuccess: false,
  });
  }

  const [bookedUser, setBookedUser] = useState(defaultValue);

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setBookedUser({
      ...bookedUser,
      [e.target.name]: value
    });
  }

private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        comment: this.state.comment,
        timeslot: this.state.timeslot,
        qty: this.state.qty,
        table: this.state.table,
    }
    this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false});
    axios.post(`http://localhost:5000/admin`, formData).then(data => {
        setTimeout(() => {
        this.props.history.push('/admin');
    }, 1500)
});
}


public render() {
    const { submitSuccess, loading } = this.state;
  return (
    <Form
    onSubmit={this.processFormSubmission}
          // validate={this.validateForm}
    render={({ handleSubmit,/*  reset,  submitting, pristine, values*/ }) => (
    <form onSubmit={handleSubmit} noValidate>
    <div className="container">
      {/* <form onSubmit={this.processFormSubmission} noValidate={true}> */}
        <div className="row">
        <div className="date col-3">
          <p> DATUM </p>
        </div>
      <div>
          <div className="timeslot col-3">
          <p> SITTNING </p>
          <label>18:00
            <input
              className="radio"
              type="radio"
              name="timeslot"
              value="18:00"
              placeholder="18:00"
              checked={bookedUser.timeslot === "18:00"}
              onChange={handleChange}
            />
          </label>
          
          <label>21:00
            <input
              className="radio"
              type="radio"
              name="timeslot"
              value="21:00"
              placeholder="21:00"
              checked={bookedUser.timeslot === "21:00"}
              onChange={handleChange} required
            />
          </label>
        </div>
        <label>
          <div className="qty col-3">
          <p> ANTAL </p>
          <select
            name="qty"
            onChange={handleChange}
            value={bookedUser.qty} required>
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
        <label>
          <div className="adminInput">
          <input
            type="text"
            name="name"
            value={bookedUser.name}
            onChange={handleChange} 
            placeholder="Namn"
            required
          />
          </div>
        </label>
        <label>
          <div className="adminInput">
          <input
            type="text"
            name="phone"
            value={bookedUser.phone}
            onChange={handleChange}
            placeholder="Telefon"
            required
          />
          </div>
        </label>
        <label>
          <div className="adminInput">
          <input
            type="text"
            name="email"
            value={bookedUser.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          </div>
        </label>
        <label>
          <div className="adminInput">
          <textarea 
          name="comment" 
          value={bookedUser.comment} onChange={handleChange} 
          placeholder="Kommentar"/>
          </div>
        </label>
     
        <label>
          <div className="devide">
          <input
            type="checkbox"
            name="gdpr"
            checked={bookedUser.gdpr}
            onChange={handleChange}
            required
          />
          <p> * By clicking on this check box you agree that we handle your personal data in accordance with GDPR. You can read more about this under our Privacy Page.</p>
          </div>
        </label>
        </div>
        <div>
        {!submitSuccess && (
            <div className="alert alert-info" role="alert">
                <p> Fyll i formuläret för att lägga till en ny bokning!</p>
            </div>
            )}
            {submitSuccess && (
            <div className="alert alert-info" role="alert">
            <p> Du har lagt till bokningen!</p>
        </div>
            )}
            </div>
        <div className="form-group col-md-4 pull-right">
          <button className="btn" type="submit">
              Boka
          </button>
      </div>
        </div>
      </form>
      </Form>
      <pre>{JSON.stringify(bookedUser, null, 3)}</pre>
  );
}
