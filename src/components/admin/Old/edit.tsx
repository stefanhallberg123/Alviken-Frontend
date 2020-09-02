// Editera befintlig bokning

import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './edit.scss';

export interface IBooked {
    [key: string]: any;
}

export interface IBookingState {
    id: number;
    customer: any;
    values: IBooked[];
    submitSuccess: boolean;
    loading: boolean;
}

class EditBooking extends React.Component<RouteComponentProps<any>, IBooked> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            is: this.props.match.params.id,
            customer: {},
            values: [],
            loading: false, 
            submitSuccess: false,
        }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:5000/admin/${this.state.id}`).then(data => {
            this.setState({customer: data.data});
        })
    }

    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.patch(`http://localhost:5000/admin/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/admin');
            }, 1500)
        })
    }
    private setValues = (values: IBooked) => {
        this.setState({ values: {...this.state.values, ...values } });
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id ]: e.currentTarget.value})
    }

    public render() {
        const { submitSuccess, loading} = this.state;
        return (
            <div>
                <div className="form-wrapper">
                    <h2>Skapa Bokning</h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fyll i formuläret för att skapa en ny bokning!
                        </div>
                    )}
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Bokningen är genomförd!
                        </div>
                    )}
                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                            {/* <div className={"date"}>
                        <p>DATUM</p>
                        <button type="button" ></button>
                    </div>
                    <div className={"timeslot"}>
                        <p>SITTNING</p>
                        <button type="button" >18:00</button>
                        <button type="button" >21:00</button>
                    </div>
                    <div className={"qty"}>
                        <p>ANTAL</p>
                        <button className="dropbtn" type="button" >1</button>
                        <div className="dropdown-content">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </div> 
                    </div>*/}
                        <div className="form-group">
                            <input type="text" id="first_name" onChange={(e) => this.handleInputChanges(e)} name="first_name" className="form-control" placeholder="Förnamn" />
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
                            <button className="normalbutton" type="submit">
                                BOKA
                            </button>
                            {loading && 
                            <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EditBooking);