<template>
    	<!-- Footer Area -->
	<button @click="showinfo">get Information </button>
		<!--/ End Footer Area -->
</template>

<script>
export default{
	props:{
		copyright:{
			type:String,
			required:true,
			default:"codefestbd.com"
		}
	},
	methods:{
		showinfo(){
			alert("01746686868");
		}
	}
}
</script>