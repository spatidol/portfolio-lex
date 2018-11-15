import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  NavLink
} from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
        <Router>
          <div className="footer">
            <NavLink exact to="/" activeClassName="active">ui/ux</NavLink>
            <NavLink to="/graphics" activeClassName="active">graphics</NavLink>
            <NavLink to="/refrigerator" activeClassName="active">refrigerator</NavLink>
            <NavLink to="/about" activeClassName="active">about</NavLink>
          </div>
        </Router>
    )
  }
}

export default Footer;
