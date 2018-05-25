import { createReducer } from '../utils';
import createConstants from '../constants';

const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  refreshToken: null,
};

export default createReducer(initialState, {
  [createConstants.LOGIN_USER_REQUEST]: (state) => Object.assign({}, state, {
    isAuthenticating: true,
    statusText: null,
  }),
  [createConstants.LOGIN_USER_SUCCESS]: (state, payload) => Object.assign({}, state, {
    isAuthenticating: false,
    isAuthenticated: true,
    token: payload.token,
    refreshToken: payload.refreshToken,
    statusText: 'You have been successfully logged in.',
  }),
  [createConstants.LOGIN_USER_FAILURE]: (state) => Object.assign({}, state, {
    isAuthenticating: false,
    isAuthenticated: false,
    token: null,
    statusText: 'Authentication Error',
  }),
  [createConstants.LOGOUT_USER]: (state) => Object.assign({}, state, {
    isAuthenticated: false,
    token: null,
    statusText: 'You have been successfully logged out.',
  }),
});
