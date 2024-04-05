import {createApp} from 'vue'

import {createRouter,createWebHistory} from 'vue-router'

import App from "./components/frontend.vue"
import login from "./components/auth/login.vue"
import registration from "./components/auth/registration.vue"

import contact from "./components/homepage/contact.vue"

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/login', component:login},
        {path: '/registration', component:registration},
        {path: '/contact', component:contact},
    ]
});

const app  = createApp(App);

app.use(router);



app.mount('#app')


