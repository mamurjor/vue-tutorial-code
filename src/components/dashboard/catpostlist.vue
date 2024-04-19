<template>
    <h1>Cat List <a href="">Add New Item</a> </h1>

    
<!-- {{ responseData }} -->
    <table>
  <tr>
    <th>Sl No</th>
    <th>category Name</th>
    <th>Category Slug</th>
    <th>Action</th>
  </tr>
  <tr v-for="(data,index) in responseData">
    <td>{{ index+1 }}</td>
    <td>{{  data.name}}</td>
    <td>{{ data.slug }}</td>

    <td> <a href="">edit</a>|| <a href="">Delete</a></td>
  </tr>
</table>


</template>


<script>

import axios  from 'axios';

      
export default{
  data(){
    return{
      apiUrl: this.$baseurl+"PostCategories",
      responseData:null,
      acesstoken:sessionStorage.getItem("token"),
    }
  },

  watch:{
    apiUrl:{
      handler(newValue){
        this.fetchData(newValue)
      },
      immediate:true
    }
  },
  methods:{
    fetchData(apiUrl){
      axios.get(apiUrl,{
        headers:{
          Authorization: `Bearer ${this.acesstoken}`
        }
      })
      .then(response => {
        this.responseData = response.data.data;
      }).catch(error=>{
        this.responseData=error;
      })
    }
  }
}

</script>