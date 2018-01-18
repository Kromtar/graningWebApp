import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //para manejo de ventanas dentro de la APP
import { connect } from 'react-redux';  //Para compatiilidad

import FrontPage from './FrontPage/FrontPage';
import ClientPortal from './ClientPortal/ClientPortal';

class Main extends Component {

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={FrontPage} />
            <Route exact={true} path="/clientportal" component={ClientPortal} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null)(Main);
