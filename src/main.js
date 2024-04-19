

import "./passets/vendors/themify-icons/css/themify-icons.css"
import "./passets/css/johndoe.css"
import "./passets/vendors/jquery/jquery-3.4.1.js"
import "./passets/vendors/bootstrap/bootstrap.bundle.js"
import "./passets/vendors/bootstrap/bootstrap.affix.js"
import "./passets/vendors/isotope/isotope.pkgd.js"
import "./passets/js/johndoe.js"
import "./assets/css/admin-style.css"
import {createApp} from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from "./components/homepage/index.vue"
import login from "./components/auth/login.vue"
import home from "./components/homepage/home.vue"
import registration from "./components/auth/registration.vue"
import contact from "./components/homepage/contact.vue"
import dashbaord from "./components/dashboard/index.vue"
import postcategory from "./components/dashboard/postcategory.vue"
import catpostlist from "./components/dashboard/catpostlist.vue"
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/', component:home
        },
        {
            path: '/login', 
          
            component:login
        },
        {
            path:'/registration',          
            component:registration
        },
        {
            path: '/dashboard', 
            component:dashbaord,
            meta:{
                isAuthmamurjor:true
            }               
        },
        {
            path: '/postcategory',
            
            component:postcategory,
            meta:{
                isAuthmamurjor:true
            }  
        },
        {
            path: '/catpostlist',
           
            component:catpostlist,
            
            meta:{
                isAuthmamurjor:true
            }     
              
        },

    ]
});





const app = createApp(App)

app.config.globalProperties.$baseurl = "http://127.0.0.1:8000/api/"
app.use(router)
app.mount('#app')

router.beforeEach((to,from,next)=>{
    if(to.meta.isAuthmamurjor){

        const token = sessionStorage.getItem("token");

        if(token){
            next()
        }
        else{
            next('/login')
        }
            
    }
    else{
        next()
    }
})
