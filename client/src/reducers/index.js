import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import loginUserStatus from './loginUserStatus';
import clientDetail from './clientDetail';
import window_mainPanel from './window_mainPanel';
import projectDetail from './projectDetail';
import galeryList from './galeryList';
import projectDetailSelected from './projectDetailSelected';

export default combineReducers({
  loginUserStatus: loginUserStatus,
  clientDetail: clientDetail,
  window_mainPanel: window_mainPanel,
  projectDetail: projectDetail,
  galeryList: galeryList,
  projectDetailSelected: projectDetailSelected,
  form: reduxForm
});
