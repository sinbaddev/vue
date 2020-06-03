import { CURRENT_ROUTE } from "../constants";

const state = { current: '/' };

const getters = {
  getCurrentRoute: (stage) => state.current,
};

const mutations = {
  [CURRENT_ROUTE]: (stage, val) => stage.current = val,
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
