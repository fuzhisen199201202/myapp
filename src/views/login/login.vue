<template>
    <div class="wrap flex-column">
        <div class="backgroundimg">
            <img src="../../assets/ba-1.jpg" alt="" class="img1"/>
            <img src="../../assets/ba-2.png" alt="" class="img2"/>
            <span>返回</span>
        </div>
        <div class="login">
            <div class="login-login flex-box" v-on:click="loginshow">登录</div>
            <div class="login-re flex-box" v-on:click="reshow">注册</div>
        </div>
        <!--登录-->
        <div class="inputinfo" v-show="isLogin">
            <div class="input-content">
                <InputComponent
                        placeholder="请输入手机号"
                        v-on:gettel="settel"
                        v-on:blur="telBlurEvent"
                 />
                <p v-show="isShowtel" class="prompted">请输入手机号</p>

                <PwdComponent
                        placeholder="请输入密码"
                        v-on:getpwd="setpwd"
                        v-on:blur="pwdBlurEvent"
                        />
                <p v-show="isShowpwd" class="prompted">请输入密码</p>
                <!--<div class="input-tel">-->
                    <!--<span></span>-->
                    <!--<input type="text" v-model="usertel" placeholder="请输入手机号"/>-->
                <!--</div>-->
                <!--<div class="input-pwd">-->
                    <!--<span></span>-->
                    <!--<input type="text" v-model="userpwd" placeholder="请输入密码"/>-->
                <!--</div>-->
            </div>
            <!--<Button-->
            <!--name="登录"-->
            <!--v-on:setEvent="getEvent"-->
            <!--/>-->
            <div class="login-btn">
                <button @click="loginEvent">登录</button>
            </div>
            <div class="pwd">忘记密码</div>
        </div>
        <!--注册-->
        <div class="inputinfo" v-show="!isLogin">
            <div class="input-content">
                <InputComponent
                        placeholder="请输入手机号"
                        v-on:gettel="settel"
                        />
                <PwdComponent
                        placeholder="请输入密码"
                        v-on:getpwd="setpwd"
                        />
                <PwdComponent
                        placeholder="请重新输入密码"
                        v-on:getpwd="setpwd"
                        />
                <!--<div class="input-tel">-->
                <!--<span></span>-->
                <!--<input type="text" v-model="usertel" placeholder="请输入手机号"/>-->
                <!--</div>-->
                <!--<div class="input-pwd">-->
                <!--<span></span>-->
                <!--<input type="text" v-model="userpwd" placeholder="请输入密码"/>-->
                <!--</div>-->
            </div>
            <!--<Button-->
            <!--name="登录"-->
            <!--v-on:setEvent="getEvent"-->
            <!--/>-->
            <div class="login-btn">
                <button @click="loginEvent">登录</button>
            </div>
            <div class="pwd">忘记密码</div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import {getlist,postlist} from '../../services/appServices.js'
    import InputComponent from '../../components/inputComponent'
    import PwdComponent from '../../components/pwdComponent'
    import Button from '../../components/button'
    export default {
        data:function(){
            return{
                isLogin:true,
                usertel:'',
                userpwd:'',
                isShowtel:false,
                isShowpwd:false
            }
        },
        created:function(){
            getlist().then(function(value){
                console.log(value)
            });
        },
        components:{InputComponent,PwdComponent,Button},
        methods:{
//            getEvent:function(){
//                alert("触发");
//            }
//            点击登录展示登录页面
            loginshow:function(){
                this.isLogin=true
            },
//            点击注册显示注册页面
            reshow:function(){
                this.isLogin=false
            },
//            从子组件传来的值我们接收到用户名
            settel:function(data){
//                console.log(data)
                this.usertel=data
            },
//            从子组件传来的值我们接收到密码
            setpwd:function(data){
                console.log(data)
                this.userpwd=data
            },
            telBlurEvent:function(data){
                console.log('username',data)
                if(data){
                    this.isShowtel=false
                }else{
                    this.isShowtel=true
                }
            },
            pwdBlurEvent:function(data){
                console.log('userpwd',data)
                if(data){
                    this.isShowpwd=false
                }else{
                    this.isShowpwd=true
                }
            },
//                    登录主页面
            loginEvent:function(){
                var usertel=this.usertel
                var userpwd=this.userpwd
                if(usertel && userpwd){
                    axios.post('http://114.55.249.153:8028/login/LoginByPhone',{
                        phone:usertel,
                        password:userpwd
                    }).then(function(response){
                        console.log('login',response);
                        this.$router.replace('/main')
                    }.bind(this)).catch(function(error){
                        console.log(error)
                    });
                }else{

                    usertel && (this.isShowtel=false)
                    !usertel && (this.isShowtel=true)
                    userpwd && (this.isShowpwd=false)
                    !userpwd && (this.isShowpwd=true)
                    console.log(!usertel,!userpwd)
                }
            }
        }
    }
</script>
<style scoped>
</style>