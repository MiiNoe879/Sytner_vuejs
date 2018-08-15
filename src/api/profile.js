import Vue from 'vue';
import config from './config';

const updateProfile = (profile) => {
  const formData = new FormData();
  for (const prop in profile) {
    if (prop === 'brands') {
      formData.append(prop, JSON.stringify(profile[prop]));
    } else {
      formData.append(prop, profile[prop]);
    }
  }
  return Vue.$http.post(config.UPDATE_PROFILE_URL, formData);
};

const getDealerShips = () => Vue.$http.get(config.GET_DEALERSHIPS_URL);

const updatePassword = (username, password) =>
Vue.$http.get(config.UPDATE_PASSWORD_URL(username, password));

export default {
  updateProfile,
  getDealerShips,
  updatePassword,
};
