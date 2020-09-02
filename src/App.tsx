import * as React from 'react';
import './App.scss';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './components/admin/Home';
import Create from './components/admin/Create';
import Edit from './components/admin/Edit';
import LandingPage from './components/landingpage/landingpage';

// import EditCustomer from './components/customer/Edit';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/admin'}> Home </Link>
            </li>
            <li>
              <Link to={'/admin/create'}> Create Customer </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/admin'} exact component={Home} />
          {/* <Route path={'/create'} exact component={Create} /> */}
          <Route path={'/admin/create'} exact component={Create} />

          <Route path={'/admin/edit/:id'} exact component={Edit} />
          <Route path={'/'} exact component={LandingPage} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);