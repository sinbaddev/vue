import http from "../http-common";

import { ADMIN_GET, ADMIN_SUCCESS } from '../constants.js';

const state = { admin: null };

const getters = { getAdmin: state => state.admin };

const actions = {
  [ADMIN_GET]: ({ commit }) => new Promise((resolve, reject) => {
    http.get(`/auth/login?token=${localStorage.getItem('token')}`)
      .then((res) => {
        commit(ADMIN_SUCCESS, res.rows);
        resolve(res.rows);
      })
      .catch(err => reject(err));
  }),
};

const mutations = {
  [ADMIN_SUCCESS]: (state, resp) => {
    state.admin = resp;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};