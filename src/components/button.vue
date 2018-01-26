<template>
    <div class="login-btn">
        <button v-on:click="setEvent">{{title}}</button>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{
                title:this.name || '确认'
            }
        },
        props:['name'],
        methods:{
            setEvent:function(){
                this.$emit('setEvent')
            }
        }
    }
</script>
<style></style>