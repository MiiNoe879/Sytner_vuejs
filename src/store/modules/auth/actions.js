/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';
import authAPI from '../../../api/auth';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }) => {
  /*
   * Normally you would use a proxy to register the user:
   *
   * new Proxy()
   *  .register(payload)
   *  .then((response) => {
   *    commit(types.REGISTER, response);
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  commit(types.LOGIN, 'RandomGeneratedToken');
  Vue.router.push({
    name: 'home.index',
  });
};

export const login = ({ commit }, user) => {
  /*
   * Normally you would use a proxy to log the user in:
   *
   * new Proxy()
   *  .login(payload)
   *  .then((response) => {
   *    commit(types.LOGIN, response);
   *    store.dispatch('account/find');
   *    Vue.router.push({
   *      name: 'home.index',
   *    });
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  // TODO: add the appropriate logic to authenticate through the API server.
  // commit(types.LOGIN, 'RandomGeneratedToken');
  // store.dispatch('account/find');
  store.dispatch('setLoading', true);
  authAPI.login(user.email, user.password).then((response) => {
    store.dispatch('setLoading', false);
    if (response !== 'false') {
      commit(types.LOGIN, response);
      commit(types.SET_AUTH_RESULT, true);
      store.dispatch('account/find');
      Vue.router.push({
        name: store.getters.getRedirectURL(),
      });
    } else {
      commit(types.SET_AUTH_RESULT, false);
    }
  });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  store.dispatch('setRedirectURL', 'home.index');
  Vue.router.push({
    name: 'home.index',
  });
};

export const setAuthResult = ({ commit }, result) => {
  commit(types.SET_AUTH_RESULT, result);
};

export const forgotPassword = ({ commit }, email) => {
  store.dispatch('setLoading', true);
  authAPI.forgotPassword(email).then((response) => {
    if (response === true) {
      commit(types.SET_AUTH_RESULT, true);
      Vue.router.push({
        name: 'forgotpassword.success',
      });
    } else {
      commit(types.SET_AUTH_RESULT, false);
    }
    store.dispatch('setLoading', false);
  });
};

export const resetPassword = ({ commit }, user) => {
  store.dispatch('setLoading', true);
  authAPI.resetPassword(user.email, user.token, user.passwordToken).then((response) => {
    if (response === true) {
      commit(types.SET_AUTH_RESULT, true);
      Vue.router.push({
        name: 'login',
      });
    } else {
      commit(types.SET_AUTH_RESULT, false);
    }
    store.dispatch('setLoading', false);
  });
};

export default {
  check,
  register,
  login,
  logout,
  setAuthResult,
  forgotPassword,
};
