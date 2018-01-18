import React, { Component } from 'react';
import { connect } from 'react-redux';  //Para compatiilidad
import * as actions from '../../actions';
import cookie from 'react-cookies'

import MainPanel from './MainPanel';
import LoginForm from './LoginForm';

class ClientPortal extends Component {

  componentDidMount(){
    const tokenInCookie = cookie.load('token');
    if(typeof(tokenInCookie) === "undefined"){
      this.props.logOut();
    }else{
      this.props.loginFromCookie(tokenInCookie);
    }
  }

  renderPortal(){
    if(this.props.loginUserState.status){
      return (
        <MainPanel />
      );
    } else {
      return (
        <LoginForm/>
      );
    }
  }

  render(){
    return(
      <div>
        {this.renderPortal()}
      </div>
    );
  }
};

function mapStateToProps(state){
  console.log(state);
  return { loginUserState: state.loginUserState };
};

export default connect(mapStateToProps, actions)(ClientPortal);
