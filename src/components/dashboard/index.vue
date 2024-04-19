<template>






<h1>Vertical Menu</h1>

<div class="vertical-menu">
  <a href="#" class="active">Home</a>
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  <router-link to="catpostlist">
    cat  list 
    </router-link>
  
 <button @click="logout">  Logout </button>
</div>




</template>

<script>

import axios from 'axios';

export default{
    data(){
        return {
            data:null,
            token:"",
            check:"",
            username:"",
            logininfo:{
                email:"",
                password:""
            },
           
        }
    },
    methods:{
        

        async logout(){
            //this.token=sessionStorage.removeItem("token");
            sessionStorage.clear()
            this.$router.push("/");
            
        }
    }
}
</script>