import * as React from 'react';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';
import './edit.scss'

export interface IValues {
  [key: string]: any;
}
export interface IFormState {
    id: number,
    customer: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class EditCustomer extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            customer: {
				comment: '',
				qty: [],
				timeslot: '',
				grpr: '',
				user: {
					name: '',
					phone: '',
					email: '',
				}
			},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

public componentDidMount(): void {
	axios.get(`http://localhost:5000/admin/edit/${this.state.id}`).then(data => {
		this.setState({ customer: data.data });
		console.log(data, "edit1")
	})
}

private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
	e.preventDefault();
	this.setState({ loading: true });
	axios.patch(`http://localhost:5000/admin/edit/${this.state.id}`, this.state.values).then(data => {
		this.setState({ submitSuccess: true, loading: false })
		setTimeout(() => {
			this.props.history.push('/');
		}, 1500)
	})
}

private setValues = (values: IValues) => {
	this.setState({ values: { ...this.state.values, ...values } });
}

private handleInputChanges = (e: any) => {
	e.preventDefault();
	this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
}


public render() {
	const { submitSuccess, loading } = this.state;
	return (
		<div className="App">
			{this.state.customer &&
				<div className={"col-md-12 form-wrapper"}>
					<h2> EDITERA BOKNING</h2>
					{submitSuccess && (
				<div className="alert alert-info" role="alert">
					Customer's details has been edited successfully
				</div>
					)}
				<div className="col-md-12 form-wrapper">
					<form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
								<div className="boxcontainer form-group col-md-12">
									<div className="date col-2">
										<p className="dateheader"> DATUM </p>
										<p className="dateinput">2020-10-01</p>
										{/* <input
											type="date"
											name="date"
											value="2020-10-01"
											placeholder=""
											onChange={handleChange}
										/> */}
                  </div>
				  </div>
                  <div className="timeslot col-4">
                    <p className="timeslotheader"> SITTNING </p>
                    <ul>
                      <li>
                        <label htmlFor="radio1">
                          18:00
                          <input
                            className="timeslotone"
                            type="radio"
                            id="radio1"
                            name="timeslot"
                            value="18:00"
                            checked={this.state.customer.timeslot === "18:00"}
                            onChange={(e) => this.handleInputChanges(e)}
                          />
                        </label>
                      </li>
                      <li>
                        <label htmlFor="radio2">
                          21:00
                          <input
                            className="timeslotinput form-control"
                            type="radio"
                            id="radio2"
                            name="timeslot"
                            value="21:00"
                            checked={this.state.customer.timeslot === "21:00"}
                            onChange={(e) => this.handleInputChanges(e)}
                            required
                          />
                        </label>
                      </li>
                    </ul>
                  </div>
                  <label>
                    <div className="qty col-2">
                      <p className="qtyheader">ANTAL</p>
                      <select
                        name="qty"
                        defaultValue={this.state.customer.qty}
                        onChange={(e) => this.handleInputChanges(e)}
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
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="name"
                    defaultValue={this.state.customer.name}
                    onChange={(e) => this.handleInputChanges(e)}
                    placeholder="Namn"
                    className="form-control forminput"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="phone"
                    defaultValue={this.state.customer.phone}
                    onChange={(e) => this.handleInputChanges(e)}
                    placeholder="Telefon"
                    className="form-control forminput"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="email"
                    defaultValue={this.state.customer.email}
                    onChange={(e) => this.handleInputChanges(e)}
                    placeholder="Email"
                    className="form-control forminput"
                    required
                  />
                </div>
                <div className="form-group col-md-12 ">
                  <textarea
                    name="comment"
                    defaultValue={this.state.customer.comment}
                    onChange={(e) => this.handleInputChanges(e)}
                    className="form-control forminput"
                    placeholder="Kommentar"
                  />
                </div>
                <div className="form-group col-md-12 ">
                  <input
                    type="checkbox"
                    name="gdpr"
                    defaultValue={this.state.customer.gdpr}
                    onChange={(e) => this.handleInputChanges(e)}
                    className="form-control forminput"
                    required
                  />
                  <p className="checkboxgdprtext">
                    {" "}
                    * By clicking on this check box you agree that we handle
                    your personal data in accordance with GDPR. You can read
                    more about this under our Privacy Page.
                  </p>
                </div>

                <div className="form-group col-md-4 pull-right">
                  <button className="btn" type="submit">
                    Skicka
                  </button>
                  {loading && <span className="fa fa-circle-o-notch fa-spin" />}
                </div>
              </form>
            </div>
            <pre>{JSON.stringify(this.state, this.state.customer, 3)}</pre>
          </div>
			})
		</div>
    );
  }
}

export default withRouter(EditCustomer);

// import React, { useState } from "react";
// import './edit.scss'

// interface IBookedForm {
// 	updateValue(bookedUser: any): void;
// }

// export interface IBooked {
//     name: string,
//     email: string,
//     phone: string,
//     comment: string,
//     timeslot: string,
// 	qty: string,
// 	gdpr: boolean,
// }

// export default function Form(props: IBookedForm) {
// 	let defaultValue: IBooked = {
// 		name: '',
// 		phone: '',
// 		email: '',
// 		comment: '',
// 		timeslot: '',
// 		qty: "0",
// 		gdpr: false
//   }

//   const [bookedUser, setBookedUser] = useState(defaultValue);

//   function handleChange(e: any) {
//     const value =
//       	e.target.type === "checkbox" ? e.target.checked : e.target.value;
// 	console.log(e);
// 	console.log(value, "1");
// 	setBookedUser({
//       	...bookedUser,
// 	  	[e.target.name]: value
// 	});
//  };

// 	const handleSubmit = (e: any) => {
// 		props.updateValue(bookedUser)
// 	}

//   return (

//     <div className="col-md-12 form-wrapper">
// 		<h2>EDITERA BOKNING</h2>
//       <form id={"create-post-form"}>
//         <div className="boxcontainer form-group col-md-12">
//           	<div className="date col-2">
//           		<p className="dateheader"> DATUM </p>
// 			  	<p className="dateinput">2020-10-01</p>
// 			  	{/* <input
// 			  		type="date"
// 					name="date"
// 					value="2020-10-01"
// 					placeholder=""
// 					onChange={handleChange}
// 			  	/> */}
//           	</div>
// 			<div className="timeslot col-4">
// 				<p className="timeslotheader"> SITTNING </p>
// 				<ul>
// 					<li>
// 						<label htmlFor="radio1">18:00
// 							<input
// 								className="timeslotone"
// 								type="radio"
// 								id="radio1"
// 								name="timeslot"
// 								value="18:00"
// 								checked={bookedUser.timeslot === "18:00"}
// 								onChange={handleChange}

// 							/>
// 						</label>
// 					</li>
// 					<li>
// 						<label htmlFor="radio2">21:00
// 							<input
// 								className="timeslotinput form-control"
// 								type="radio"
// 								id="radio2"
// 								name="timeslot"
// 								value="21:00"
// 								checked={bookedUser.timeslot === "21:00"}
// 								onChange={handleChange}
// 								required
// 							/>
// 						</label>
// 					</li>
// 				</ul>
// 			</div>
//         		<label>
//           	<div className="qty col-2">
// 			  <p className="qtyheader">ANTAL</p>
// 				<select
// 				name="qty"
// 				onChange={handleChange}
// 				value={bookedUser.qty}
// 				required>
// 					<option value="0">0</option>
// 					<option value="1">1</option>
// 					<option value="2">2</option>
// 					<option value="3">3</option>
// 					<option value="4">4</option>
// 					<option value="5">5</option>
// 					<option value="6">6</option>
//           		</select>
//           	</div>
//         		</label>
//           	<div className="form-group col-md-12">
// 				<input
// 					type="text"
// 					name="name"
// 					value={bookedUser.name}
// 					onChange={handleChange}
// 					placeholder="Namn"
// 					className="form-control forminput"
// 					required
// 				/>
//           	</div>
//           	<div className="form-group col-md-12">
// 				<input
// 					type="text"
// 					name="phone"
// 					value={bookedUser.phone}
// 					onChange={handleChange}
// 					placeholder="Telefon"
// 					className="form-control forminput"
// 					required
// 				/>
//           	</div>
//           	<div className="form-group col-md-12">
//           		<input
// 					type="text"
// 					name="email"
// 					value={bookedUser.email}
// 					onChange={handleChange}
// 					placeholder="Email"
// 					className="form-control forminput"
// 					required
// 				/>
//           	</div>
//           	<div className="form-group col-md-12 ">
// 				<textarea
// 					name="comment"
// 					value={bookedUser.comment}
// 					onChange={handleChange}
// 					className="form-control forminput"
// 					placeholder="Kommentar"/>
// 			</div>
//           	<div className="form-group col-md-12 ">
// 				<input
// 					type="checkbox"
// 					name="gdpr"
// 					checked={bookedUser.gdpr}
// 					onChange={handleChange}
// 					className="form-control forminput"
// 					required
// 				/>
//           		<p> * By clicking on this check box you agree that we handle your personal data in accordance with GDPR. You can read more about this under our Privacy Page.</p>
//           	</div>
//         	</div>
//         	<div className="form-group col-md-4 pull-right">
// 				<button className="btn" type="submit" onClick={handleSubmit}>
// 				Boka
// 				</button>
//       		</div>
//       	</form>
//       <pre>{JSON.stringify(bookedUser, null, 3)}</pre>
//     </div>
//   );
// }
