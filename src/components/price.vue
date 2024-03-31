<template>
		
					{{ price }}
			
    	<!-- Pricing Table -->
	
</template>

<script>
export default{
	props:{
		price:{
			type:Number,
			required:true,
			defaul:"230"
		}
	}
}
</script>