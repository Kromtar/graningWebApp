import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../media/photos/logo.png';

class MainPanel extends Component {

  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <RouterLink to={'/'}>
              <a><img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/></a>
            </RouterLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a onClick={() => this.props.logOut()} style={{color: '#00305b'}}>
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </nav>
        Main Panel
      </div>
    );
  }
};

export default connect(null, actions)(MainPanel);
