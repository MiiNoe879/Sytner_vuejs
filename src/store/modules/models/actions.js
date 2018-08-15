/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export default {
  check,
};
