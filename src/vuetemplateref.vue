<template>
    <p ref="institutename">Mamurjor IT</p>
   

    <label for="price">product Price</label>
    <input type="text" ref="price">

    <label for="price">product Qty</label>
    <input type="text" @change="productcalculate" ref="qty">

    <label for="price">product Total Price</label>
    <input type="text" ref="total">

    <label for="price">install payment </label>
    <input type="text" @change="duecalcualte" ref="instantpayment">
    
    <label for="price">Due Amount </label>
    <input type="text"  ref="dueamount">
    <span ref="result"> </span>
</template>

<script>
export default{
    methods:{
        productcalculate(){

            var price = this.$refs.price.value;
            var qty = this.$refs.qty.value;

            this.$refs.total.value= price*qty;


            
        },
        duecalcualte(){
            var total = this.$refs.total.value;
            var instantpayment = this.$refs.instantpayment.value;

            this.$refs.dueamount.value= total-instantpayment;
        }
    }
}
</script>