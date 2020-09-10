import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import axios from "axios";
import "./visibilityandremove.scss";
import AdminNav from "./nav";

export interface IValues {
  [key: string]: any;
}
export interface IFormState {
  id: number;
  customer: any;
  values: any;
  submitSuccess: boolean;
  loading: boolean;
}

class EditCustomer extends React.Component<
  RouteComponentProps<any>,
  IFormState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      customer: {
        date: "",
        comment: "",
        qty: 0,
        timeslot: "",
        grpr: "",
        user: {
          name: "",
          phone: "",
          email: "",
        },
      },
      values: [],
      loading: false,
      submitSuccess: false,
    };
  }

  public componentDidMount(): void {
    axios
      .get(`http://localhost:5000/admin/edit/${this.state.id}`)
      .then((data) => {
        this.setState({ customer: data.data });
      });
  }

  private processFormSubmission = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .patch(
        `http://localhost:5000/admin/edit/${this.state.id}`,
        this.state.values
      )
      .then((data) => {
        this.setState({ submitSuccess: true, loading: false });
        setTimeout(() => {
          this.props.history.push("/admin");
        }, 1500);
      });
  };

  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  private handleInputChanges = (e: IValues) => {
    e.preventDefault();
    this.setValues({ [e.currentTarget.name]: e.currentTarget.value });
  };

  public render() {
    const { submitSuccess, loading } = this.state;
    return (
      <div className="App">
        <AdminNav></AdminNav>
        {this.state.customer && (
          <div className={"col-md-12 form-wrapper"}>
            <h2> KONTROLLERA BOKNING</h2>
            {submitSuccess && (
              <div className="alert alert-info" role="alert">
              </div>
            )}
            <div className="col-md-12 form-wrapper">
              <form
                className="form"
                id={"create-post-form"}
                onSubmit={this.handleInputChanges}
                noValidate={true}
              >
                <div className="form-group col-md-12">
                  <div className="boxcontainer form-group col-md-12">
                    <div className="date col-2">
                      <p className="dateheader"> DATUM </p>
                      <input
                        className="datenumber"
                        type="date"
                        onChange={this.handleInputChanges}
                        value={this.state.customer.date}
                      />
                    </div>
                    <div className="timeslot col-4">
                      <p className="timeslotheader"> SITTNING </p>
                      <p>&nbsp;</p>

                      <div className="radio-toolbar">
                        <input
                          className="timeslotone"
                          type="radio"
                          id="radio1"
                          name="timeslot"
                          checked={this.state.customer.timeslot === "18:00"}
                          onChange={this.handleInputChanges}
                          required
                        />
                        <label htmlFor="radio1">18:00</label>
                        <input
                          className="timeslotone"
                          type="radio"
                          id="radio2"
                          name="timeslot"
                          checked={this.state.customer.timeslot === "21:00"}
                          onChange={this.handleInputChanges}
                          required
                        />
                        <label htmlFor="radio2">21:00</label>
                      </div>
                    </div>
                    <label>
                      <div className="qtybox col-2">
                        <p className="qtyheader">ANTAL</p>
                        <select
                          name="qty"
                          value={this.state.customer.qty}
                          onChange={this.handleInputChanges}
                          required
                        >
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
                      name="customer.user.name"
                      value={this.state.customer.user.name}
                      onChange={this.handleInputChanges}
                      placeholder="Namn"
                      className="form-control forminput"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="phone"
                      value={this.state.customer.user.phone}
                      onChange={this.handleInputChanges}
                      placeholder="Telefon"
                      className="form-control forminput"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="email"
                      value={this.state.customer.user.email}
                      onChange={this.handleInputChanges}
                      placeholder="Email"
                      className="form-control forminput"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 ">
                    <textarea
                      name="comment"
                      value={this.state.customer.comment}
                      onChange={this.handleInputChanges}
                      className="form-control forminput"
                      placeholder="Kommentar"
                    />
                  </div>
                  <div className="form-group col-md-12 ">
                    <input
                      type="checkbox"
                      name="gdpr"
                      value={this.state.customer.gdpr}
                      onChange={this.handleInputChanges}
                      className="form-control forminput checkboxgdpr"
                      required
                    />
                    <p className="checkboxgdprtext">
                      * By clicking on this check box you agree that we handle
                      your personal data in accordance with GDPR. You can read
                      more about this under our Privacy Page.
                    </p>
                  </div>

                  <div className="form-group col-md-4 pull-right">
                    <button className="btn" type="submit">
                      Skicka
                    </button>
                    {loading && (
                      <span className="fa fa-circle-o-notch fa-spin" />
                    )}
                  </div>
                </div>
              </form>
            </div>
<<<<<<< HEAD
            {/* <pre>{JSON.stringify(this.state, this.state.customer, 3)}</pre> */}
=======
>>>>>>> isabelle
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(EditCustomer);
