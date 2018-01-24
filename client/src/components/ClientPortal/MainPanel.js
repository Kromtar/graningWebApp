import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link as RouterLink } from 'react-router-dom';
import Responsive from 'react-responsive';

import logo from '../../media/photos/logo.png';
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

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    return(
      <div>

        <nav style={{position: 'initial'}}>
          <div className="nav-wrapper">
            <div className="brand-logo center">
              <img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/>
            </div>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li style={{paddingRight: '25px'}}>
                <a onClick={() => this.props.logOut()} style={{color: '#00305b'}}>
                  SALIR
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Default>
          {this.renderContent()}
        </Default>

        <Mobile>
          <div className="card" style={{marginTop: '35px'}}>
            <div className="card-content white-text" style={{paddingBottom: '2px', paddingTop: '10px', backgroundColor: '#ff6600'}}>
              <span className="card-title center-align">
                El panel de clientes no esta disponible para celulares
              </span>
            </div>
          </div>
        </Mobile>

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
