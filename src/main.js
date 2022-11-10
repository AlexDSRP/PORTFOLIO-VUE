import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Contact from "./views/Contact.vue";
import Accueil from "./views/Accueil.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
        {
            path: "/",
            name: "Accueil",
            component: Accueil,
        },
    ],
});

createApp(App).use(router).mount("#app");
