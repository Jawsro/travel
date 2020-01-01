<template>
    <div class="login">
        <div class="goback" >
            <img src="../../assets/iconfont/back.png" alt="" class="img" @click="goBack()">
            <span class="text"> 登录</span>
            <span class="right">注册</span>
        </div>
        <van-cell-group>
            <van-field v-model="phone"  label="手机号" placeholder="请输入手机号" />
            <van-field v-model="password" label="密码" placeholder="请输入密码" />
        </van-cell-group>
        <van-button  size="large" @click="login()">登录</van-button>
        <div class="footer">
            <span>关于我们</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'Must',
    data(){
        return{
            phone:"",
            password:""
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        login(){
            let a=sessionStorage.getItem("phone")
            console.log(a)
            //console.log(this.phone,this.password)
            const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if(!reg.test(this.phone)){
                this.$toast('请输入格式正确的手机号');
            }else if(this.password==''){
                 this.$toast('请输入密码');
            }
            
            axios.get("/static/mock/user.json").then(res=>{
                console.log(res.data)
                let userlist=res.data;
                for(let i=0;i<userlist.length;i++){
                    if(userlist[i].phone==this.phone && userlist[i].password==this.password){
                        this.$toast("登录成功")
                        sessionStorage.setItem("phone",this.phone)
                        sessionStorage.setItem("password",this.password)
                       
                        this.$router.push("/")
                    }else if(userlist[i].phone!=this.phone ||userlist[i].password !=this.password){
                        this.$toast("登录失败")
                    }
                }
                
            })
        }
    }

}
</script>

<style lang="stylus" scoped>
    .login >>> .van-cell__title 
        color :#19a9ba
    .login >>> .van-button
        background:#85d1db
        color:#fff
        font-size:18px
        margin-top:5px
    .login
        
        .goback
            height:0.8rem
            background:#18a9b9  
            text-align:center
            position: relative
            .img
                width:.4rem
                hieght:.4rem 
                position :absolute
                top:.2rem
                left:.2rem
            .text
                font-size:18px
                color:#fff
                line-height:.8rem
            .right
                position:absolute
                right: 0.2rem
                top:.2rem
                color:#75ffff
                font-size: 18px
        .footer
            position:absolute
            bottom:0px
            width:100%   
            line-height:2rem
            text-align:center
            font-size:16px        
</style>