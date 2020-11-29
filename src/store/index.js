import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import notificationsHistory from "./notificationsHistory";
import notificationsList from "./notificationsList"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    notificationsHistory,
    notificationsList
  }
});
