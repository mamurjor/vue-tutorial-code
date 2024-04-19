<template>
    <h1>Login Form </h1>

   


    

  <div class="container">
    <h1>Login  {{ data }} </h1>
   
   
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="logininfo.email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="logininfo.password"  name="psw" id="psw" required>

 
    <button @click="login"  class="registerbtn">Login </button>
    
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
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
            }
        }
    },
    methods:{
        async login(){
          

        await axios.post(this.$baseurl+"mamulogin",this.logininfo).then(
            response =>{

                if(response.data.success==true){
          

          sessionStorage.setItem("login",response.data.success);
       sessionStorage.setItem("token",response.data.data.token);

      
       //sessionStorage.setItem("username",this.data.data);
       //this.username=sessionStorage.getItem("username");
     
          this.$router.push("/dashboard");
       }
       else{
          this.data = response.data.message.error;
       }
            }
         ).catch(
            error => {
                this.data=error;
            }
         );
            
         
         
          

       
      
     
        },

        async logout(){
            //this.token=sessionStorage.removeItem("token");
            sessionStorage.clear()
        }
    }
}
</script>