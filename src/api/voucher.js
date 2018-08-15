import Vue from 'vue';
import config from './config';

const getVouchers = () => Vue.$http.get(config.GET_VOUCHERS_URL);
const redeemVoucher = voucherid => Vue.$http.get(`${config.REDEEM_VOUCHER_URL}/${voucherid}`);

export default {
  getVouchers,
  redeemVoucher,
};
