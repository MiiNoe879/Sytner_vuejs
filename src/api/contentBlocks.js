import Vue from 'vue';
import config from './config';

const getContentBlocks = content => fetch(config.GET_CONTENT_BLOCK_URL(content))
  .then(response => response.json());

const getHomePageData = custId => fetch(config.GET_HOME_PAGE_DATA_URL(custId))
  .then(response => response.json());

const getHOBs = () => fetch(config.GET_HOB_DATA_URL)
.then(response => response.json());

const getLocations = () => fetch(config.GET_LOCATION_DATA_URL)
.then(response => response.json());

const submitTestDrive = (data) => {
  const formData = new FormData();
  for (const prop in data) {
    formData.append(prop, data[prop]);
  }
  return Vue.$http.post(config.SUBMIT_TEST_DRIVE_URL(formData.get('custId')), formData);
};

export default {
  getContentBlocks,
  getHomePageData,
  getHOBs,
  getLocations,
  submitTestDrive,
};
