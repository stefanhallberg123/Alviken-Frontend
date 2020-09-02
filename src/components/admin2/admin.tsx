import React from 'react';
// import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './home';
import Create from './booking/create'; 
import EditCustomer from './booking/edit';

class NavBar extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/admin2/'}> Home </Link>
            </li>
            <li>
              <Link to={'/admin2/create'}> Create Customer </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/admin2'} exact component={Home} />
          <Route path={'/admin2/create'} exact component={Create} />
          <Route path={'/admin2/edit/:id'} exact component={EditCustomer} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(NavBar);