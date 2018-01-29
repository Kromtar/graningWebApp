import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import FrontPage from './FrontPage/FrontPage';
import ClientPortal from './ClientPortal/ClientPortal';
import ProjectsPortafolio from './projectsPortafolio/ProjectsPortafolio';
class Main extends Component {

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={FrontPage} />
            <Route exact={true} path="/clientportal" component={ClientPortal} />
            <Route exact={true} path="/portafolio" component={ProjectsPortafolio} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null)(Main);
