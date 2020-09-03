// Booking
import React, { useEffect } from 'react';
import { Link, RouteComponentProps  } from 'react-router-dom';
import axios from 'axios';

interface IState {
    customers: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { customers: [] }
    }
    public componentDidMount(): void {
        axios.get(`http://localhost:5000/admin`).then(data => {
            this.setState({ customers: data.data })
            console.log(data.data)
        })
    }

//     useEffect(() => {
//         axios
//         .get("http://localhost:5000/admin")
//         .then((data) => {
//         console.log(data.data)
//     });
// }, []);

    public deleteCustomer(id: number) {
        axios.delete(`http://localhost:5000/admin/${id}`).then(data => {
            const index = this.state.customers.findIndex(customer => customer.id === id);
            this.state.customers.splice(index, 1);
            this.props.history.push('/');
        })
    }
    

    public render() {
        const customers = this.state.customers; 
        return (
            <div>
                {customers.length === 0 && (
                    <div className="text-center">
                        <h2>No customer found at the moment</h2>
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
                                {customers && customers.map(customer =>
                                    <tr key={customer.id}>
                                        <td>{customer.name}</td>
                                        <td>{customer.email} {customer.phone}</td>
                                        <td>{customer.comment} </td>
                                        <td>{customer.date}</td>
                                        <td>{customer.timeslot}</td>
                                        <td>{customer.qty}</td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <Link to={`/edit/${customer.id}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(customer.id)}>Delete</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}