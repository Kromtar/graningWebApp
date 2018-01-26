import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../media/photos/logo.webp';
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

class MainPanel extends Component {

  renderContent(){
    if(this.props.window_mainPanel === 'list'){
      return <ProjectList />;
    }else if(this.props.window_mainPanel === 'detail'){
      return <ProjectDetail />;
    }else{
      return <div>Error</div>;
    }
  }

  render(){

    return(
      <div>

        <nav style={{position: 'initial'}}>
          <div className="nav-wrapper">
            <div className="brand-logo center">
              <img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/>
            </div>
            <ul id="nav-mobile" className="left">
              <li style={{paddingRight: '25px'}}>
                <a onClick={() => this.props.logOut()} style={{color: '#00305b'}}>
                  SALIR
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {this.renderContent()}

      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    window_mainPanel: state.window_mainPanel,
  };
};

export default connect(mapStateToProps, actions)(MainPanel);
