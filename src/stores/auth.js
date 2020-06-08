const state = { token: '' };
const getters = { getToken: state => state.token };
const actions = {};
const mutations = {
  setToken: (stage, value) => stage.token = value,
};

export default {
  state,
  getters,
  actions,
  mutations,
};