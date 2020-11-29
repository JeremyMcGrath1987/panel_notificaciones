import Vue from "vue";
import VueRouter from "vue-router";
import NotificationsList from "../views/NotificationsList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NotificationsList",
    component: NotificationsList
  },
  {
    path: "/notificationshistory",
    name: "NotificationsHistory",
    component: () => import("../views/NotificationsHistory")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
