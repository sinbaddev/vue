import Vue from 'vue';
import Vuex from 'vuex';
import routes from './route.js';
import auth from './auth.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    routes,
    auth
  },
  strict: debug,
});