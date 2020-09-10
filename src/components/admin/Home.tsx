import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import "./home.scss";
import visibility from "../../assets/visibility.svg";
import remove from "../../assets/remove.svg";
import AdminNav from "./nav";

interface IState {
  booking: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { booking: [] };
  }
  public componentDidMount(): void {
    axios.get("http://localhost:5000/admin").then((response) => {
      this.setState({ booking: response.data });
    });
  }
  public deleteBooking(id: number) {
    axios.delete(`http://localhost:5000/admin/delete/${id}`).then((data) => {
      const index = this.state.booking.findIndex((booking) => {
        return booking._id === id;
      });
      this.state.booking.splice(index, 1);
      this.props.history.push("/admin");
    });
  }

  public render() {
    let trs = this.state.booking.map((customer) => {
      return (
        <tr key={customer._id}>
          <td>{customer.user.name}</td>
          <td>
            {customer.user.email} - {customer.user.phone}
          </td>
          <td>{customer.comment}</td>
          <td>{customer.date}</td>
          <td>{customer.timeslot}</td>
          <td>{customer.qty}</td>
          <td>
            <div>
              <Link
                to={`/admin/edit/${customer._id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                <img src={visibility} alt="visibility booking" />
              </Link>
              <button onClick={() => this.deleteBooking(customer._id)}>
                <img src={remove} alt="delete booking" />
              </button>
            </div>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <AdminNav></AdminNav>
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
                  <th scope="col">Info</th>
                </tr>
              </thead>
              <tbody>{trs}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
