import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// import './style.css'
// import Select from './select'

export interface IValues {
    name: string,
    email: string,
    phone: string,
    comment: string,
    date: Date,
    timeslot: string,
    qty: string,
    gdpr: boolean,
}

export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            comment: '',
            date: '',
            timeslot: '',
            qty: '1',
            gdpr: false,
            values: [],
            loading: false,
            submitSuccess: false
        }
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            comment: this.state.comment,
            date: this.state.date,
            timeslot: this.state.timeslot,
            qty: this.state.qty,
            gdpr: this.state.gdrp,
        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        axios.post(`http://localhost:5000/admin/`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/admin');
            }, 1500)
        ]);
    }

    private handleChange = (e: any) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
    })
}
        
public render() {
    const { submitSuccess, loading } = this.state;
    return (
        <div>
            <div className={"col-md-12 form-wrapper"}>
                <h2> Lägg till Bokning </h2>
                {!submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        Fyll i formuläret nedan för att lägga till en bokning
                </div>
                )}
                {submitSuccess && (
                    <div className="alert alert-info" role="alert">
                        Bokningen är genomförd. 
                        </div>
                )}
                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>

                    <div className="form-group col-md-12">
                        <div className="date col-2">
                            <p> DATUM </p>
                        </div>
                        <div className="timeslot col-4">
				            <p> SITTNING </p>
				            <label>18:00
                            <input
                                className="radio"
                                type="radio"
                                name="timeslot"
                                value="18:00"
                                placeholder="18:00"
                                checked={this.state.timeslot === "18:00"} 
                                onChange={(e) => this.handleChange(e)} 
                            />
                            </label>
                            <label>21:00
                                <input
                                    className="radio form-control"
                                    type="radio"
                                    name="timeslot"
                                    value="21:00"
                                    placeholder="21:00"
                                    checked={this.state.timeslot === "21:00"} 
                                    onChange={(e) => this.handleChange(e)} 
                                    required 
                                />
                            </label>
                        </div>
                            <label>
                        <div className="qty col-2">
                            <p> ANTAL </p>
                            {/* <Select></Select> */}
                            <select
                            name="qty"
                            onChange={e => this.handleChange(e)} 
                            required>
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
                        <input type="text" id="name" onChange={(e) => this.handleChange(e)} name="name" className="form-control" placeholder="Namn" />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="email" id="email" onChange={(e) => this.handleChange(e)} name="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" id="phone" onChange={(e) => this.handleChange(e)} name="phone" className="form-control" placeholder="Telefon" />
                    </div>
                    <div className="form-group col-md-12">
                        <input type="text" id="comment" onChange={(e) => this.handleChange(e)} name="comment" className="form-control" placeholder="Kommentar" />
                    </div>
                    <label>
                    <div className="form-group col-md-12">
                        <input
                            type="checkbox"
                            onChange={(e) => this.handleChange(e)}
                            name="gdpr"
                            className="form-control"
                            required
                        />
                        <p> * By clicking on this check box you agree that we handle your personal data in accordance with GDPR. You can read more about this under our Privacy Page.</p>
                    </div>
                        </label>
                    <div className="form-group col-md-4 pull-right">
                        <button className="btn btn-success" type="submit">
                            Boka
                        </button>
                        {loading &&
                            <span className="fa fa-circle-o-notch fa-spin" />
                        }
                    </div>
                </form>
            </div>
            <pre>{JSON.stringify(this.state, null, 3)}</pre>
        </div>
    
    )}
};


export default withRouter(Create);