import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link, BrowserRouter } from 'react-router-dom';
import Booking from './booking';
import Create from './create';
import EditBooking from './edit';

class Admin extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <BrowserRouter>
    <div>
      <nav>
        <ul id="nav">
          <li id="menu">
              <Link to={'/'}> Logga Ut </Link>
            </li>
            <li id="menu">
              <Link to={'/admin/'}> Inställningar </Link>
            </li>
            <li id="menu">
              <Link to={'/admin/'}> Bokningar </Link>
            </li>
            <li id="menu">
              <Link to={'/admin/create'}> Ny Bokning </Link>
            </li>
        </ul>
      </nav>
      <Switch>
        <Route path={'/admin/'} exact component={Booking} />
        <Route path={'/admin/create'} exact component={Create} />
        <Route path={'/admin/edit/:id'} exact component={EditBooking} />
      </Switch>
    </div>
    </BrowserRouter>
  )};
}

export default withRouter(Admin);
