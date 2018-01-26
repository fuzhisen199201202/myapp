<template>
    <div class="wrap flex-column">
        <div class="backgroundimg">
            <img src="../../assets/ba-1.jpg" alt="" class="img1"/>
            <img src="../../assets/ba-2.png" alt="" class="img2"/>
            <span>返回</span>
        </div>
        <div class="login">
            <div class="login-login flex-box">登录</div>
            <div class="login-re flex-box">注册</div>
        </div>
        <div class="inputinfo">
            <div class="input-content">
                <InputComponent  placeholder="请输入手机号"/>
                <InputComponent  placeholder="请输入密码"/>
                <div class="input-tel">
                    <span></span>
                    <input type="text" placeholder="请输入手机号"/>
                </div>
                <div class="input-pwd">
                    <span></span>
                    <input type="text" placeholder="请输入密码"/>
                </div>
            </div>
        </div>
        <div class="login-btn">
            <button>登录</button>
        </div>
    </div>
</template>
<script>
    import InputComponent from '../../components/inputComponent'
    export default {
//        data:function(){
//            return{
//
//            }
//        },
        components:{InputComponent}
    }
</script>
<style scoped>
</style>