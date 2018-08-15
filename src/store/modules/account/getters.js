/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */
const getUserInfo = state => state.user;
const getDealerShips = state => state.dealerships;

export default {
  getUserInfo,
  getDealerShips,
};
