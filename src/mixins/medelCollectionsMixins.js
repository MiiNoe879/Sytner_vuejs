/* ============
 * Slot Mixin
 * ============
 *
 * Mixins are used to easily expand Vue components.
 * This slot-mixin, will add the hasSlot-method
 * to the specified Vue component.
 */
/* eslint-disable */

import Vue from 'vue';
import VLayout from '@/layouts/Default';

import axios from 'axios';
import VueClipboard from 'vue-clipboard2';
import VueRouter from 'vue-router';
import VueSession from 'vue-session';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  /**
   * The methods that the mixin will add.
   */
  created() {
    axios.get('http://138.68.173.200:8080/v1/5da23da1e982706f/90e330923b693d7/getCollections/22/22')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.collections = response.data
      })
      .catch((e) => {
        this.errors.push(e)
      })
  },
  methods: {
    getCollectionName(event, colData) {
      if (colData.name) {
        this.theColleciton = colData
      }
      return true;
    },
    getModelsFromCollection(event, colId) {
      const urlApiCall = 'http://138.68.173.200:8080/v1/getModelsFromCollection/' + colId + '/23/32'
      axios.get(urlApiCall)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.modelsSelCols = response.data;
        })
        .catch((e) => {
          this.errors.push(e)
        })
      return true;
    },
  },
};
