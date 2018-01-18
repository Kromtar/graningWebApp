import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import logoBig from '../../media/photos/logoBig.png';

class LoginForm extends Component {

  render(){

    const onClickLogin = (credentials) => {
        //TODO: Validar datos
        //      Feedback de errores
        //      Feedback de login en proceso
        this.props.loginUser(credentials);
    }

    return (
      <div className="container" style={{ marginTop:  '30px'}}>
        <form onSubmit={this.props.handleSubmit((credentials) => onClickLogin(credentials))}>
          <div className="row center-align">
            <img src={logoBig}/>
          </div>
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
                    <Field type="text" name="password" component="input" />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button className="btn right" type="submit" style={{background: '#ff6600'}}>
                      Log-in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm = connect(null, actions)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
