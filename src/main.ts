import { createApp } from "vue";
import "./fonts.css";
import "./index.css";
import App from "./App.vue";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Technologies from "./views/Technologies.vue";
import Login from "./views/Login.vue"
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login/", name: "Login", component: Login },
    { path: "/forrms/", name: "Home", component: Home },
    { path: "/forrms/about", name: "About", component: About },
    { path: "/forrms/technologies", name: "Technologies", component: Technologies },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
