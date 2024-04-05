<template>

<ul>
    <li v-for="singleproduct in productlist" ref="product"> 
    {{ singleproduct }}
    
    </li>
</ul>

<button @click="getproductname">show Product Name </button>
</template>

<script>

export default{
    data(){
        return {
            productlist : ["PHP","laravel","Vue","restapi+vue","Theme Developemnt","Plugind Developemnt"],
    
        }
    },
    methods:{
        getproductname(){
            alert(this.$refs.product[2].innerHTML);
        }
    }
}

</script>