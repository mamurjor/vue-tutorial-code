<template>
  <h1>{{  data}}</h1>
  <h1>Allah </h1>
</template>


<script>

export default{
    data(){
        return {
            data:null,
        }
    },
    methods:{
        async fetchdata(){
            const respnse = await fetch("https://jsonplaceholder.typicode.com/todos/1")

            this.data = await respnse.json();
        }
    }
}

</script>