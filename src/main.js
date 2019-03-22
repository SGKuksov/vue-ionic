import Vue from "vue";
import App from "./App.vue";
import Ionic from "@ionic/vue";

Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
