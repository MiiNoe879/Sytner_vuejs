/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { FIND, SET_DEALER_SHIPS } from './mutation-types';

export default {
  [FIND](state, account) {
    // state.email = account.email;
    // state.firstName = account.firstName;
    // state.lastName = account.lastName;
    state.user = account;
  },
  [SET_DEALER_SHIPS](state, dealerships) {
    state.dealerships = dealerships;
  },
};
