import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link as RouterLink } from 'react-router-dom';
import Responsive from 'react-responsive';

import logo from '../../media/photos/logo.webp';

class LoginForm extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render(){

    const onClickLogin = (credentials) => {
      //TODO: Validar datos
      //      Feedback de errores
      //      Feedback de login en proceso
      this.props.loginUser(credentials);
    }

    return (
      <div>

        <nav style={{position: 'initial'}}>
          <div className="nav-wrapper">
            <div className="brand-logo center">
              <img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/>
            </div>
            <ul id="nav-mobile" className="left">
              <li style={{paddingRight: '25px'}}>
                <RouterLink style={{color: '#00305b'}} to={'/'}>
                  REGRESAR
                </RouterLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container" style={{ marginTop:  '30px'}}>
          <form onSubmit={this.props.handleSubmit((credentials) => onClickLogin(credentials))}>
            <div className="row">
              <div className="col s6 offset-s3">
                <div
                  className="z-depth-3"
                  style={{
                    borderStyle: 'solid',
                    borderColor: '#00305b',
                    borderWidth: '1px',
                    borderRadius: '10px',
                    paddingTop: '10px',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}
                >
                  <div className="row">
                    <div className="col s12">
                      <b>Email:</b>
                      <Field type="text" name="email" component="input" />
                      <b>Password:</b>
                      <Field type="password" name="password" component="input" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <RouterLink to={'/'}>
                        <button className="waves-effect waves-light btn-flat left">
                          Regresar
                        </button>
                      </RouterLink>
                      <button className="btn right" type="submit" style={{background: '#ff6600'}}>
                        Entrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>

      </div>
    );
  }
}

LoginForm = connect(null, actions)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
