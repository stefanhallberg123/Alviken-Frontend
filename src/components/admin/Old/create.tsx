//Ny bokning

import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './create.scss';

export interface IBooked {
    customerId: string,
    first_name: string, 
    last_name: string,
    email: string,
    phone: string,
    comment: string,
    date: Date,
    timeslot: string,
    qty: string,
    table: number,
}

export interface IBookingState {
    [key: string]: any;
    values: IBooked[];
    submitSuccess: boolean;
    loading: boolean;
}

// export default function Create(props: IBooked) {
//     let defaultValue: IBooked
// }

class Create extends React.Component<RouteComponentProps, IBookingState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            customerId: '',
            first_name: '', 
            last_name: '',
            email: '',
            phone: '',
            comment: '',
            date: '',
            timeslot: '',
            qty: '1',
            table: '',
            values: [],
            loading: false,
            submitSuccess: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e) {
    //     const value =
    //       e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //     setState({
    //       ...state,
    //       [e.target.name]: value
    //     });
    //   }

    handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    }
    
    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            customerId: this.state.customerId,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            comment: this.state.comment,
            date: this.state.date,
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
        private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
            e.preventDefault();
            this.setState({
                [e.currentTarget.name]: e.currentTarget.value,
            });
        }


public render() {
    const { submitSuccess, loading } = this.state;
    return (
        <div>
            <div className={"form-wrapper"}>
                <h2>Lägg till Bokning</h2>

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

                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                    <div className={"date"}>
                        <p>DATUM</p>
                    </div>
                    <div className="form-group sittning">
                        <p>SITTNING</p><br />
                        <label className="unchecked"><input type="radio" id="timeslot" onChange={(e) => this.handleInputChanges(e)} name="toggle" className="form-control" placeholder="18:00"/><span>18:00</span></label>
                        <label className="unchecked"><input type="radio" id="timeslot" onChange={(e) => this.handleInputChanges(e)} name="toggle" className="form-control" placeholder="21:00" /><span>21:00</span></label>

                        {/* <input type="radio"  />
                        <input type="radio" id="timeslot" onChange={(e) => this.handleInputChanges(e)} name="timeslot" className="form-control" placeholder="21:00" /> */}
                    </div>
                    <div className={"qty"}>
                    <label>
                        <p>ANTAL</p>
                        <select value={this.state.value} onChange={this.handleChange} name="qty" className="qty">
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                            <option value="six">6</option>
                        </select>
                        </label>
                        <input type="submit" value="Submit" />


                        <p>ANTAL</p>
                        <button className="dropbtn" type="button" >VÄLJ ANTAL</button>
                        <div className="dropdown-content">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </div>
                    </div>
                    <div className="form-group"><input type="text" id="first_name" onChange={(e) => this.handleInputChanges(e)} name="first_name" className="form-control" placeholder="Förnamn" />
                    </div>
                    <div className="form-group">
                    <input type="text" id="last_name" onChange={(e) => this.handleInputChanges(e)} name="last_name" className="form-control" placeholder="Efternamn" />
                    </div>
                    <div className="form-group">
                    <input type="text" id="phone" onChange={(e) => this.handleInputChanges(e)} name="phone" className="form-control" placeholder="Telefonnummer" />
                    </div>
                    <div className="form-group">
                    <input type="text" id="email" onChange={(e) => this.handleInputChanges(e)} name="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                    <input type="text" id="comment" onChange={(e) => this.handleInputChanges(e)} name="comment" className="form-control" placeholder="Kommentar" />
                    </div>
                    <div className="form-group">
                        <button id="normalbutton" type="submit">BOKA</button>
                        {loading && <span className="fa fa-circle-o-notch fa-spin" />
                        }
                    </div>
                </form>
            </div>
        </div>
        
    )
}
}
export default withRouter(Create);