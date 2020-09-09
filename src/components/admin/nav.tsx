import * as React from 'react';
import './nav.scss';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

class AdminNav extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div className="form-wrapper">
        <nav>
          <ul>
            <li>
              <Link to={'/admin'}> Bokningar</Link>
            </li>
            <li>
              <Link to={'/admin/create'}> Skapa Bookning </Link>
            </li>
            <li>
              <Link to={'/admin'}> Inställningar </Link>
            </li>
            <li>
              <Link to={'/'}> Logga Ut </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default withRouter(AdminNav);