<template>

<div class="w3-bar w3-black">
  <button class="w3-bar-item w3-button" @click="myactivetab='london'" >Login</button>
  <button class="w3-bar-item w3-button" @click="myactivetab='paris'" >Registration</button>
  <button class="w3-bar-item w3-button" @click="myactivetab='tokyo'" >MY Account</button>
</div>
<component :is="myactivetab"> </component>



</template>

<script>

import  london from "./components/london.vue"
import  paris from "./components/paris.vue"
import  tokyo from "./components/tokyo.vue"




export default{
    components:{
        london,
        paris,
        tokyo,

    },
    data(){
        return {
            myactivetab:"london"
        }
    }
}


</script>