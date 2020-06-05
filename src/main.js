import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import { OverlayScrollbarsPlugin } from "overlayscrollbars-vue";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import { Line } from "vue-chartjs";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faAngleLeft, faCircle, faTachometerAlt, faTh, faCopy, faFolder, faPencilAlt, faTrash, faBook, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import stores from "./stores";
import configs from "./config";

library.add(faBars, faAngleLeft, faCircle, faTachometerAlt, faTh, faCopy, faFolder, faPencilAlt, faTrash, faBook, faMinus, faPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(OverlayScrollbarsPlugin);
Vue.component("overlay-scrollbars", OverlayScrollbarsComponent);

Vue.component("line-chart", {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
});

Vue.mixin({
  data: function() {
    return {
      images: {
        avatar: "../../img/avatar.png",
        avatar2: "../../img/avatar2.png",
        avatar3: "../../img/avatar3.png",
        avatar4: "../../img/avatar4.png",
        logo: "../../img/AdminLTELogo.png",
        photo1: "../../img/photo1.png",
        photo2: "../../img/photo2.png",
        user1: "../../img/user1-128x128.jpg",
        user2: "../../img/user2-160x160.jpg",
        user3: "../../img/user3-128x128.jpg",
        user4: "../../img/user4-128x128.jpg",
        user7: "../../img/user7-128x128.jpg",
      },
    };
  },
});

Vue.config.productionTip = false
Vue.prototype.$config = configs;

new Vue({
  router: routes,
  store: stores,
  render: (h) => h(App),
  mounted() {},
}).$mount("#app");
