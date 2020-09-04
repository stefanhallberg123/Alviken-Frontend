import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import axios from 'axios';

interface IState {
    booking: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { booking: [] }
    }
    public componentDidMount(): void {
        axios.get("http://localhost:5000/admin").then(response => {
            console.log(response.data);
            this.setState({ booking: response.data });
        })
    }
    public deleteCustomer(id: number) {
        axios.delete(`http://localhost:5000/admin/${id}`).then(data => {
            const index = this.state.booking.findIndex(customer => customer._id === id);
            this.state.booking.splice(index, 1);
            this.props.history.push('/');
        })
    }
    public render() {
        // const booking = this.state.booking;
        console.log(this.state, "strumpa")
        let trs = this.state.booking.map(customer => {
            return (
            <tr key={customer._id}>
                <td>{customer.user.name}</td>
                <td>{customer.user.email} - {customer.user.phone}</td>
                <td>{customer.comment}</td>
                <td>{customer.date}</td>
                <td>{customer.timeslot}</td>
                <td>{customer.qty}</td>
                <td>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group" style={{marginBottom:"20px"}}>
                            <Link to={`/admin/edit/${customer._id}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                            <button className="btn btn-sm btn-outline-secondary" onClick={()=>this.deleteCustomer(customer.id)}>Delete</button>
                        </div>
                    </div>
                </td>
            </tr>);
        });

        console.log(trs);
        return (
            <div>
                {this.state.booking.length === 0 && (
                    <div className="text-center">
                        <h2>Inga bokningar kan visas för tillfället</h2>
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Namn</th>
                                    <th scope="col">Kontakt</th>
                                    <th scope="col">Kommentar</th>
                                    <th scope="col">Datum</th>
                                    <th scope="col">Tid</th>
                                    <th scope="col">Antal</th>
                                    <th scope="col">Ändra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trs}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}