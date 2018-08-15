/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

// import Transformer from '@/transformers/AccountTransformer';
import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';
import authAPI from '../../../api/auth';
import profileAPI from '../../../api/profile';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

export const find = ({ commit }) => {
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  // const account = {
  //   first_name: 'John',
  //   last_name: 'Doe',
  //   email: 'jonh@doe.com',
  // };

  // commit(types.FIND, Transformer.fetch(account));
  authAPI.getUserInfo().then((response) => {
    if (!response.data) {
      Vue.router.push({
        name: 'login',
      });
    } else {
      commit(types.FIND, response.data);
    }
  });
};

export const updateProfile = ({ commit }, profile) => {
  store.dispatch('setLoading', true);
  profileAPI.updateProfile(profile).then((response) => {
    if (response.data.status) {
      store.dispatch('account/find');
    }
    store.dispatch('setLoading', false);
  }).catch(() => {
    store.dispatch('setLoading', false);
  });
};

export const updatePassword = ({ commit }, data) => {
  profileAPI.updatePassword(data.username, data.password).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log(err);
  });
};

export const getDealerShips = ({ commit }) => {
  profileAPI.getDealerShips().then((response) => {
    commit(types.SET_DEALER_SHIPS, response.data);
  });
};

export default {
  find,
  updateProfile,
  getDealerShips,
  updatePassword,
};
