import React, { useState } from "react";
// import "./form.scss";

interface IBookedForm {
	updateValue(bookedUser: any): void;
}

export interface IBooked {
    name: string,
    email: string,
    phone: string,
    comment: string,
    timeslot: string,
	qty: string,
	gdpr: boolean,
}

export default function Form(props: IBookedForm) {
	let defaultValue: IBooked = {
    name: '',
    phone: '',
    email: '',
    comment: '',
    timeslot: '',
    qty: "0",
    gdpr: false
  }

  const [bookedUser, setBookedUser] = useState(defaultValue);

  function handleChange(e: any) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
	  console.log(e);
	  setBookedUser({
      ...bookedUser,
	  [e.target.name]: value
	});
	};
	
	const handleSubmit = (e: any) => {
		props.updateValue(bookedUser)
	}

  return (

    <div className="container">
      <form >
		  <h1>EDIT</h1>
        <div className="row">
          	<div className="date col-3">
          	<p> DATUM </p>
          	</div>
			<div className=" col-3">
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
        	<div className="form-group col-md-4 pull-right">
				<button className="btn" type="submit" onClick={handleSubmit}> 
				Boka
				</button>
      		</div>
      	</form>
      <pre>{JSON.stringify(bookedUser, null, 3)}</pre>
    </div>
  );
}

