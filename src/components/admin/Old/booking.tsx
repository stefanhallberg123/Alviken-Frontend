import * as React from 'react';
// import NavBar from '../admin/navbar/navbar';
import './booking.scss';
import { Link, RouteComponentProps, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import edit from '../../assets/edit.svg';
import remove from '../../assets/remove.svg';

interface IState {
    customers: any[];
}

export default class Booking extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { customers: [] }
    }

    public componentDidMount(): void {
        axios.get(`http://localhost:5000/admin`).then(data => {
            this.setState({ customers: data.data })
        })
    }
    
    public deleteBooking(id: number) {
        axios.delete(`http://localhost:5000/admin/${id}`).then(data => {
            const index = this.state.customers.findIndex(customer => customer.id === id);
            this.state.customers.splice(index, 1);
            this.props.history.push('/admin');
        })
    }

    render() {
        const customers = this.state.customers;
        return (
            <BrowserRouter>
            {/* <NavBar></NavBar> */}
            <div>
                {customers.length === 0 && (
                    <div className="text-center">
                        <h2>Inga bokningar är gjorda för tillfället</h2>
                    </div>
                )}
                    <div className="container">
                        <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th><h3>ORDER NO</h3></th>
                                    <th><h3>DATUM</h3></th>
                                    <th><h3>NAMN</h3></th>
                                    <th><h3>KONTAKT</h3></th>
                                    <th><h3>ANTAL</h3></th>
                                    <th><h3>TID/SITTNING</h3></th>
                                    <th><h3>KOMMENTAR</h3></th>
                                    <th><h3>ÄNDRA</h3></th>
                                </tr>
                            </thead>
                        
                            <tbody> 
                                {customers && customers.map(customer => 
                            <tr key={customer.id}>
                                <td><p>{customer.id}</p></td>
                                <td><p>{customer.Date}</p></td>
                                <td><p>{customer.first_name}</p> <p>{customer.last_name}</p></td>
                                <td><p>{customer.email}</p> <p>{customer.phone}</p></td>
                                <td><p>{customer.qty}</p></td>
                                <td><p>{customer.timeslot}</p></td>
                                <td><p>{customer.comment}</p></td>
                            <td>
                                <Link to={`admin/edit/${customer.id}`}><img src={edit} alt="edit" id="smallimg" /></Link>
                                <Link to="/admin"><button className="" onClick={() => this.deleteBooking(customer.id)}><img src={remove} alt="remove" id="smallimg" /></button></Link>
                            </td>
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}
}
