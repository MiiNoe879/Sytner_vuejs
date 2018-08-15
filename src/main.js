/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */
import './plugins/vuex';
import './plugins/axios';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';
// import './plugins/bootstrap';
import './plugins/font-awesome';

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Stylus is used for this boilerplate.
 *
 * If you don't want to use Stylus, that's fine!
 * Replace the stylus directory with the CSS preprocessor you want.
 * Import the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://stylus-lang.com/
 */

import './assets/stylus/app.styl';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from './App';
import store from './store';

Vue.config.productionTip = false;

store.dispatch('auth/check');

/* eslint-disable no-new */
new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#fullpage',

  /**
   * The localization plugin.
   */
  i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
  // TODO:  Add pagination to pages
  // TODO:  Add settings page for path to use for viewer. such as viewer.insitu-app below:
  //        http:124.0.0.1:4040/viewer/cust/
  // TODO:  Create customers page and edit their details including password reset.
  // TODO:  JWT, Auth and change my Password
  // TODO:  wait on action being done.
  // TODO:  progress bar on files upload
  // TODO:  Upload handling of S3 assets, thumbnails as below:
  //        Thumbnails shall be checked and not pushed to uploads but added to thumbnails
  // TODO:  Update all API ednpoints to include customer url element to get from db.customers
  // TODO:  customers admin page


});
