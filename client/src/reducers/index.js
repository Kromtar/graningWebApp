import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import test from './test';
import loginUserStatus from './loginUserStatus';
import clientDetail from './clientDetail';
import window_mainPanel from './window_mainPanel';
import projectDetail from './projectDetail';

export default combineReducers({
  test: test,
  loginUserStatus: loginUserStatus,
  clientDetail: clientDetail,
  window_mainPanel: window_mainPanel,
  projectDetail: projectDetail,
  form: reduxForm
});
