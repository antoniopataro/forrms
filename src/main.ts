import { createApp } from "vue";
import "./fonts.css";
import "./index.css";
import App from "./App.vue";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Technologies from "./views/Technologies.vue";
import Login from "./components/Login.vue"
import { createRouter, createWebHistory } from "vue-router";
import {createStore} from 'vuex'
import Store from './store/store.js'
// In you main.js
// ... considering that your app creation is here
import Toaster from "@meforma/vue-toaster";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path :'',name:'Home',component:Home},
  ],
});
const store = createStore(Store)

const app = createApp(App);
app.use(Toaster).provide('toast', app.config.globalProperties.$toast);
app.use(store)
app.use(router);
app.mount("#app");
