/* ============
 * Auth Module
 * ============
 */
/* eslint-disable */

import state from './state';
import contentBlocksAPI from '../../../api/contentBlocks';
import voucherAPI from '../../../api/voucher';
import store from '@/store';

export default {
  // namespaced: true,
  state,
  actions: {
    changeAdminStyle ({ commit }, brand) {
      commit('changeAdminStyle', brand)
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    setOwnersOffers ({ commit }) {
      store.dispatch('setLoading', true);
      contentBlocksAPI.getContentBlocks('owners-offers').then((response) => {
        if (response.stats) {
          commit('setOwnersOffers', response.data);
        } else {
          store.dispatch('setRedirectURL', 'home.vehicle.ownersoffers');
          Vue.router.push({
            name: 'login',
          });
        }
        store.dispatch('setLoading', false);
      }).catch((e) => {
        store.dispatch('setLoading', false);
      });
    },
    setCosmeticRepairs ({ commit }) {
      store.dispatch('setLoading', true);
      contentBlocksAPI.getContentBlocks('cosmetic-repairs').then((response) => {
        if (response.stats) {
          commit('setCosmeticRepairs', response.data);
        } else {
          store.dispatch('setRedirectURL', 'home.vehicle.cosmeticrepairs');
          Vue.router.push({
            name: 'login',
          });
        }
        store.dispatch('setLoading', false);
      }).catch((e) => {
        store.dispatch('setLoading', false);
      });
    },
    setVIPs ({ commit }) {
      store.dispatch('setLoading', true);
      contentBlocksAPI.getContentBlocks('little-vips').then((response) => {
        if (response.stats) {
          commit('setVIPs', response.data);
        } else {
          store.dispatch('setRedirectURL', 'home.vehicle.littlevips');
          Vue.router.push({
            name: 'login',
          });
        }
        store.dispatch('setLoading', false);
      }).catch((e) => {
        store.dispatch('setLoading', false);
      });
    },
    setVouchers ({ commit }) {
      store.dispatch('setLoading', true);
      voucherAPI.getVouchers().then((response) => {
        if (Array.isArray(response.data)) {
          commit('setVouchers', response.data);
        } else {
          store.dispatch('setRedirectURL', 'home.vehicle.redeemvoucher');
          Vue.router.push({
            name: 'login',
          });
        }
        store.dispatch('setLoading', false);
      }).catch((e) => {
        store.dispatch('setLoading', false);
      });
    },
    redeemVoucher ({ commit }, voucherid) {
      store.dispatch('setLoading', true);
      voucherAPI.redeemVoucher(voucherid).then((response) => {
        console.log(response);
        store.dispatch('setLoading', false);
        store.dispatch('setVouchers');
      }).catch((e) => {
        store.dispatch('setLoading', false);
      });
    },
    setLoading ({ commit }, loading) {
      commit('setLoading', loading);
    },
    setRedirectURL ({ commit }, url) {
      commit('setRedirectURL', url);
    },
    setELinks ({ commit }) {
      contentBlocksAPI.getContentBlocks('e-links').then((response) => {
        if (response.stats) {
          commit('setELinks', response.data);
        }
      });
    },
    setHomePageData ({ commit }, custId) {
      contentBlocksAPI.getHomePageData(custId).then((response) => {
        commit('setHomePageData', response);
      });
    },
    setHOBs ({ commit }) {
      contentBlocksAPI.getHOBs().then((response) => {
        if (response.stats) {
          commit('setHOBs', response.data);
        }
      });
    },
    setLocations ({ commit }) {
      contentBlocksAPI.getLocations().then((response) => {
        if (response.stats) {
          commit('setLocations', response.data);
        }
      });
    },
    updateSection1Row1 ({ commit }, data) {
      commit('updateSection1Row1', data);
    },
    submitTestDrive ({ commit }, data) {
      store.dispatch('setLoading', false);
      contentBlocksAPI.submitTestDrive(data).then((response) => {
        store.dispatch('setLoading', true);
      });
    },
  },
  getters: {
    count3: state => {
      return state.count + 99
    },
    // Get color for the brand
    getAdminBrandStyles: (state) => (brand) => {
      return state.styles.adminPortal
      // return state.todos.find(todo => todo.id === id)
    },
    getLoading: (state) => {
      return state.loading
    },
    getBrands:(state) => () =>{
      return state.brands
    },
    getBrand:(state) => () =>{
      return state.brand
    },
    getMenus: (state) => () => {
      return state.menus
    },
    getHeader: (state) => {
      return state.header
    },
    getHome: (state) => () => {
      return state.home
    },
    getFooter: (state) => {
      return state.footer
    },
    getOffers: (state) => {
      return state.offers
    },
    getVIPs: (state) => {
      return state.vips
    },
    getVouchers: (state) => {
      return state.vouchers
    },
    getCosmeticRepairs: (state) => {
      return state.cosmeticrepairs
    },
    getLocations: (state) => () => {
      return state.locations
    },
    getMapInfo: (state) => () => {
      return state.mapInfo
    },
    getNews: (state) => () => {
      return state.news
    },
    getEarnRewardsEmail: (state) => () => {
      return state.earnRewardsEmail
    },
    getRedirectURL: (state) => () => {
      return state.redirectURL
    },
    getELinks: (state) => {
      return state.elinks
    },
    getHOBs: (state) => () => {
      return state.hobs
    },
  },
  mutations: {
    changeAdminStyle(state, brand) {
      state.styles.adminPortal.backgroundColor = 'blue';
      switch (brand.brand) {
        case 'Honda':
          state.styles.adminPortal.backgroundColor = '#17a2b8';
          break;
        case 'Skoda':
          state.styles.adminPortal.backgroundColor = 'grey';
          break;
        case 'Kawasaki':
          state.styles.adminPortal.backgroundColor = '#46B87D';
          break;
        case 'Kawasaki':
          state.styles.adminPortal.backgroundColor = '#2252B8';
          break;
        default:
          state.styles.adminPortal.backgroundColor = 'grey';
      }
    },
    increment(state) {
      state.count++;
    },
    setOwnersOffers(state, offers) {
      state.offers = offers;
    },
    setCosmeticRepairs(state, cosmeticrepairs) {
      state.cosmeticrepairs = cosmeticrepairs;
    },
    setVIPs(state, vips) {
      state.vips = vips;
    },
    setVouchers(state, vouchers) {
      state.vouchers = vouchers;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setRedirectURL(state, url) {
      state.redirectURL = url;
    },
    setELinks(state, data) {
      state.elinks = data;
    },
    setHOBs(state, data) {
      state.hobs = data;
    },
    setLocations(state, data) {
      state.locations = data;
    },
    setHomePageData(state, data) {
      state.header.title = data.title;
      state.header.welcome = data.welcome;
      state.header.news = data.news;
      state.footer = data.footer;
      state.home.slider = data.slider;
      state.home.section1 = data.section1;
      state.home.section2 = data.section2;
      state.home.section3 = data.section3;
    },
    updateSection1Row1(state, data) {
      state.home.section1.row1[2].title = data.manager_title;
      state.home.section1.row1[2].description = data.manager_name;
      state.home.section1.row1[2].image2 = data.image2;
      state.home.section1.row1[2].href = data.href;
    },
  },
  // // Using actions:
  // // dispatch with a payload
  //   store.dispatch('incrementAsync', {
  //     amount: 10
  //   })
  //
  //   // dispatch with an object
  //   store.dispatch({
  //     type: 'incrementAsync',
  //     amount: 10
  //   })
};
