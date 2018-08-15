const API_BASE_URL = 'http://35.177.206.206:7070';
// const API_BASE_URL = 'http://localhost:7070';
const BRAND = 'Audi';
const GET_CONTENT_BLOCK_URL = cbkind => `${API_BASE_URL}/cBlock/${BRAND}/${cbkind}/list`;
const LOGIN_URL = `${API_BASE_URL}/users/login`;
const FORGOT_PASSWORD_URL = `${API_BASE_URL}/users/fogotpassword`;
const RESET_PASSWORD_URL = `${API_BASE_URL}/users/resetpassword`;
const GET_USER_INFO_URL = `${API_BASE_URL}/users/profile/get`;
const GET_VOUCHERS_URL = `${API_BASE_URL}/vouchers/getList/${BRAND}`;
const REDEEM_VOUCHER_URL = `${API_BASE_URL}/vouchers/redeem`;
const GET_HOME_PAGE_DATA_URL = custId => `${API_BASE_URL}/homePageDataAll/${BRAND}/${custId}`;
const UPDATE_PROFILE_URL = `${API_BASE_URL}/users/profile/update`;
const GET_DEALERSHIPS_URL = `${API_BASE_URL}/dealershipsAll/${BRAND}`;
const GET_HOB_DATA_URL = `${API_BASE_URL}/hob/${BRAND}/list`;
const GET_LOCATION_DATA_URL = `${API_BASE_URL}/location/${BRAND}/list`;
const UPDATE_PASSWORD_URL = (username, password) => `${API_BASE_URL}/users/changepassword/${username}/${password}`;
const SUBMIT_TEST_DRIVE_URL = custId => `${API_BASE_URL}/request-test-drive/${custId}`;

export default {
  GET_CONTENT_BLOCK_URL,
  LOGIN_URL,
  GET_USER_INFO_URL,
  GET_VOUCHERS_URL,
  REDEEM_VOUCHER_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
  GET_HOME_PAGE_DATA_URL,
  UPDATE_PROFILE_URL,
  GET_DEALERSHIPS_URL,
  GET_HOB_DATA_URL,
  GET_LOCATION_DATA_URL,
  UPDATE_PASSWORD_URL,
  SUBMIT_TEST_DRIVE_URL,
};
