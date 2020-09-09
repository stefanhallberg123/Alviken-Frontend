import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import './home.scss'
import edit from '../../assets/edit.svg'
import remove from '../../assets/remove.svg'

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
    public deleteBooking(id: number) {
        axios.delete(`http://localhost:5000/admin/delete/${id}`).then(data => {
            console.log(data, 'home3')
            const index = this.state.booking.findIndex(customer => {
                return customer.id === id;
            });
            this.state.booking.splice(index, 1);
            this.props.history.push('/admin');
            console.log(index)
        });
    }
//     public render() {
//         const {booking} = this.state;
//         return (
//             <div>
//                 {booking.length === 0 && (
//                     <div className="text-center">
//                         <h2>Inga bokningar kan visas för tillfälle</h2>
//                     </div>
//                 )}
//                 <div className="container">
//                     <div className="row">
//                         <table className="table table-bordered">
//                             <thead className="thead-light">
//                                 <tr>
//                                     <th scope="col">Namn</th>
//                                     <th scope="col">Kontakt</th>
//                                     <th scope="col">Kommentar</th>
//                                     <th scope="col">Datum</th>
//                                     <th scope="col">Tid</th>
//                                     <th scope="col">Antal</th>
//                                     <th scope="col">Ändra</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {booking && booking.map(customer =>
//                                     <tr key={customer._id}>
//                                         {/* {customer._id} */}
//                                         <td>{customer.name}</td>
//                                         <td>{customer.email} - {customer.phone}</td>
//                                         <td>{customer.comment}</td>
//                                         <td>{customer.date}</td>
//                                         <td>{customer.timeslot}</td>
//                                         <td>{customer.qty}</td>
//                                         <td>
//                                         <Link
//                                             to={`/admin/edit/${customer._id}`}
//                                             className="btn btn-sm btn-outline-secondary">
//                                         <img
//                                             src={edit}
//                                             alt="edit booking"/></Link>
//                                         <button
//                                             onClick={() => this.deleteBooking(customer._id)}>
//                                         <img
//                                             src={remove}
//                                             alt="delete booking"/>
//                                         </button>
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

    public render() {
        // const booking = this.state.booking;
        console.log(this.state, "strumpa")
        let trs = this.state.booking.map(customer => {
            return (
            <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email} - {customer.phone}</td>
                <td>{customer.comment}</td>
                <td>{customer.date}</td>
                <td>{customer.timeslot}</td>
                <td>{customer.qty}</td>
                <td>
                    <div>
                    <Link
                        to={`/admin/edit/${customer._id}`}
                        className="btn btn-sm btn-outline-secondary">
                    <img
                        src={edit}
                        alt="edit booking"/></Link>
                    <button
                        onClick={() => this.deleteBooking(customer._id)}>
                    <img
                        src={remove}
                        alt="delete booking"/>
                    </button>
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
