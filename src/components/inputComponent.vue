<template>
    <div class="input-tel">
        <span></span>
        <input type="text" :placeholder="placeholder"
               v-on:input="inputEvent"
               v-on:blur="blurEvent"
        />
    </div>
</template>
<script>
    export default {
        data:function(){
            return{

            }
        },
        props:['placeholder'],
        methods:{
            inputEvent:function(e){
                var value= e.target.value
                console.log(value)
                this.$emit('gettel',value)
            },
            blurEvent:function(e){
                var value= e.target.value
                this.$emit('blur',value)
            }
        }
    }
</script>
<style></style>