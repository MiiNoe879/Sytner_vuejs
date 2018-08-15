/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import DatePicker from 'vue2-datepicker';
import VueTimepicker from 'vue2-timepicker';
import { Jumper } from 'vue-loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyATflxp_XojhEGY70jy_dybXHRSdK91OT0',
    libraries: 'places',
  },
});
Vue.component('loading-spinner', Jumper);
Vue.component('date-picker', DatePicker);
Vue.component('vue-timepicker', VueTimepicker);

export default [
  // root page - TODO: complete the home page,
  {
    path: '/',
    name: 'home.index',
    component: () => import('@/pages/Home/'),
    meta: {
      auth: true,
    },
  },
  // {
  //   path: '/',
  //   redirect: '/c/Skoda',
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login/'),
    meta: {
    },
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: () => import('@/pages/Login/ForgotPassword'),
    meta: {
    },
  },
  {
    path: '/forgotpasswordsuccess',
    name: 'forgotpassword.success',
    component: () => import('@/pages/Login/ForgotPasswordSuccess'),
    meta: {
    },
  },
  {
    path: '/resetpassword/:userId/:passwordToken',
    name: 'resetpassword',
    component: () => import('@/pages/Login/ResetPassword'),
    meta: {
    },
  },
  {
    path: '/account',
    name: 'home.account',
    component: () => import('@/pages/Account/'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/account/details',
    name: 'home.account.detail',
    component: () => import('@/pages/Account/Detail'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/account/contactus',
    name: 'home.account.contactus',
    component: () => import('@/pages/Account/Contact'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/account/enquiryresult',
    name: 'home.account.enquiryresult',
    component: () => import('@/pages/Account/EnquiryResult'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/vehicle/details',
    name: 'home.vehicle.detail',
    component: () => import('@/pages/Vehicle/Detail'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/vehicle/previous',
    name: 'home.vehicle.previous',
    component: () => import('@/pages/Vehicle/PreviousVehicles'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/vehicle/earnrewards',
    name: 'home.vehicle.earnrewards',
    component: () => import('@/pages/Vehicle/EarnRewards'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/vehicle/makingitspecial',
    name: 'home.vehicle.makingitspecial',
    component: () => import('@/pages/Vehicle/MakingItSpecial'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/vehicle/redeemvoucher',
    name: 'home.vehicle.redeemvoucher',
    component: () => import('@/pages/Vehicle/RedeemVoucher'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/vehicle/ownersoffers',
    name: 'home.vehicle.ownersoffers',
    component: () => import('@/pages/Vehicle/OwnersOffers'),
    meta: {
    },
  },
  {
    path: '/vehicle/community',
    name: 'home.vehicle.littlevips',
    component: () => import('@/pages/Vehicle/LittleVIPs'),
    meta: {
    },
  },
  {
    path: '/vehicle/cosmeticrepairs',
    name: 'home.vehicle.cosmeticrepairs',
    component: () => import('@/pages/Vehicle/CosmeticRepairs'),
    meta: {
    },
  },
  {
    path: '/vehicle/accidentcare',
    name: 'home.vehicle.accedentcare',
    component: () => import('@/pages/Vehicle/AccidentAssistance'),
    meta: {
    },
  },
  {
    path: '/vehicle/locations',
    name: 'home.vehicle.locations',
    component: () => import('@/pages/Vehicle/Locations'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/earnrewards/:custId',
    name: 'home.vehicle.requesttestdriveform',
    component: () => import('@/pages/Vehicle/RequestTestDriveForm'),
    meta: {
    },
  },
];
