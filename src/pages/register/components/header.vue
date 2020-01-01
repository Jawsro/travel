<template>
    <div class="register-header">
        <div class="top" @click="goBanck()">
            <img src="../../../assets/iconfont/back.png" alt="" class="img">
        </div>
        <img src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg" alt="" class="image">
        <router-link class="bottom" tag="div" to="login">
            <img v-show="!imgurl" src="https://source.qunarzz.com/usercenter/touch/avatar.png" alt="" class="bimg">
            <img :src="imgurl" alt="" class="bimg">
            <P v-show="!phone">登录/注册</P>
            <p>{{username}},欢迎您！</p>
        </router-link>

    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'Must',
    data(){
        return {
            phone:'',
            username:"",
            imgurl:""
        }
    },
    created(){
        this.phone=sessionStorage.getItem("phone");
        this.getUser()
    },
    methods:{
        goBanck(){
            this.$router.go(-1)
        },
        getUser(){
             axios.get("/static/mock/user.json").then(res=>{
                console.log(res.data)
                this.username=res.data[0].user
                this.imgurl=res.data[0].imgurl
             })
        }
    },
    mounted(){
        console.log("我执行了")
       
    }

}
</script>

<style lang="stylus" scoped>
.register-header
    position:relative
   .top 
        height:.4rem
        position:fixed
        z-index:9
        top:.3rem
        .img 
            width:.4rem
            height:.4rem
            margin-left:.2rem
    .image
        width:100%
        height:3rem  
    .bottom
        position:absolute
        top: 1rem
        left:0
        text-align:center
        color:#fff
        font-size:14px
        width:100%
        .bimg
            width:65px
            height:65px
            border-radius:50%
            margin-bottom:6px
</style>