<template>
    <h1> postcategory  </h1>

    {{ data }}


    

  <div class="container">
    <h1>post category {{data}} </h1>
   
    <hr>
    <label for="email"><b>name</b></label>
    <input type="text" placeholder="Enter Name" v-model="items.name" id="email" required>

    <label for="email"><b>slug</b></label>
    <input type="text" placeholder="Enter Slug" v-model="items.slug" id="email" required>

    <button @click="addnew"  class="registerbtn">Add New Item </button>
    
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
            items:{
                slug:"",
                name: ""
            }
        }
    },
    methods:{
        async addnew(){        
await axios.post(this.$baseurl+"PostCategories",this.items).then(response=>{
  this.data = response.data.message  
}).catch(error=>{
  this.data=error;
});  
        },

      
    }
}
</script>