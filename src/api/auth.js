import Vue from 'vue';
import config from './config';

const login = (email, password) => fetch(`${config.LOGIN_URL}/${email}/${password}`)
  .then(response => response.text());
const getUserInfo = () => Vue.$http.get(config.GET_USER_INFO_URL);
const forgotPassword = email => fetch(`${config.FORGOT_PASSWORD_URL}/${email}`)
.then(response => response.json());
const resetPassword = (email, token, password) => fetch(`${config.RESET_PASSWORD_URL}/${email}/${token}/${password}`)
.then(response => response.json());

export default {
  login,
  getUserInfo,
  forgotPassword,
  resetPassword,
};
