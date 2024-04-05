<template>
    <h1>Login Form </h1>

    <!-- {{ data }} -->

    <button @click="login">Login </button>
    
   your User Name :  {{ username }}
   <p>{{ token }}</p>


   <button @click="logout"> Logout </button>
</template>


<script>

import axios from 'axios';

export default{
    data(){
        return {
            data:null,
            token:"",
            username:"",
            logininfo:{
                email:"hadijaman@gmail.com",
                password:"12345678"
            }
        }
    },
    methods:{
        async login(){
          

           this.data = await axios.post("http://127.0.0.1:8000/api/mamulogin",this.logininfo);
        //     //window.localStorage.setItem(key,value)
        //     localStorage.setItem("usertoken",this.data.data.data.token)
        //     // localStorage.getItem()
        //     // localStorage.removeItem()
        //     // localStorage.length
        //     // localStorage.clear()
        //    this.token= localStorage.getItem("usertoken");
    
        sessionStorage.setItem("token",this.data.data.data.token);
        sessionStorage.setItem("username",this.data.data.data.name);
        this.username=sessionStorage.getItem("username");
        this.token=sessionStorage.getItem("token");
        },

        async logout(){
            //this.token=sessionStorage.removeItem("token");
            sessionStorage.clear()
        }
    }
}
</script>