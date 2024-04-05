<template>
    <button @click="getcatlist">show</button>
    <p> {{ data }}</p>
</template>

<script>

import axios from 'axios';

export default{
    data(){
        return {
            data:null,
        }
    },
    methods:{
        async getcatlist(){
          

           this.data = await axios.get("http://127.0.0.1:8000/api/PostCategories");
        }
    }
}
</script>