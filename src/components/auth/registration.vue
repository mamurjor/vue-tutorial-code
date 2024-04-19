<template>
    <h1>Login Form </h1>

    {{ data }}


    

  <div class="container">
    <h1>Login </h1>
    <p>Please fill in this form to create an account.</p>
    <hr>
    <label for="email"><b>Fullname</b></label>
    <input type="text" placeholder="Enter Email" v-model="registrationinfo.name" id="email" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="registrationinfo.email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="registrationinfo.password" id="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button @click="registration"  class="registerbtn">Registration </button>
    
  </div>
  
  <div class="container signin">
    <p>Already have an account?  <router-link to="login">
        Login 
    </router-link> </p>
  </div>

</template>


<script>

import axios from 'axios';

export default{
    data(){
        return {
            data:null,
            token:"",
            username:"",
            registrationinfo:{
                email:"hadijamanr@gmail.com",
                password:"12345678",
                name: "hadibadboyr"
            }
        }
    },
    methods:{
        async registration(){
          

           this.data = await axios.post("http://127.0.0.1:8000/api/mamuuserregister",this.registrationinfo);
  
    
        // sessionStorage.setItem("token",this.data.data.data.token);
        // sessionStorage.setItem("username",this.data.data);
        // this.username=sessionStorage.getItem("username");
        // this.token=sessionStorage.getItem("token");
        },

      
    }
}
</script>