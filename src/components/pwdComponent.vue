<template>
    <div class="input-pwd">
        <span></span>
        <input type="text" placeholder="请输入密码"
               v-on:input="inputEvent1"
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
            inputEvent1:function(e){
                var value= e.target.value
                console.log(value)
                this.$emit('getpwd',value)
            },
            blurEvent:function(e){
                var value= e.target.value
                console.log(value)
                this.$emit('blur',value)
            }
        }
    }
</script>
<style></style>