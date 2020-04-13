import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import {Link, useHistory, useLocation} from 'react-router-dom';
import logoImg from './img/logo.svg';
import {isAuthorized} from './users';

function Nav() {
  const history = useHistory();
  const location = useLocation();
  return (
    <nav>
      <Link to="/">
        <h3 className="logo-link">
          <img src={logoImg} alt="Smiley face"/>
        </h3>
      </Link>
      <ul className="nav-link" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        {isAuthorized() && (
          <div style={{cursor: 'pointer', paddingLeft: 40}}
               onClick={() => {
                 localStorage.setItem('email', '');
                 window.location.reload();
               }}
          >
            <li>Log out</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
