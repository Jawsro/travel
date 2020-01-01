<template>
    <div class="header">
       <div @click="goBack()" class="header-left" >
           <div>
               <img src="../../assets/iconfont/back.png" alt="" class="img">
           </div>
       </div>
       <div class="header-input">
           <span><img src="../../assets/iconfont/search.png" alt="" class="img"></span>
           输入城市/景点/游玩主题
        </div>
        <router-link to="City">
            <div class="header-right">
                {{$store.getters.getCity}}
                <span><img src="../../assets/iconfont/jt.png" alt="" class="img"></span>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default{
       name:"HomeHeader",
       methods:{
           goBack(){
               this.$router.go(-1)
           }
       }
    }
</script>
<style lang="stylus" scoped>
    .header
        display:flex 
        line-height:.86rem
        background-color:#00bcd4
        color:#fff
        .header-left
            width:.64rem
            float:left
            .img
                width:.4rem
                height:.4rem
                margin-left:.2rem
        .header-input
            flex:1
            height:.64rem
            line-height :.64rem
            margin-left:.2rem
            margin-top:.12rem
            background:#fff
            border-radius:.1rem
            color:#ccc
            .img
                width:.4rem
                height:.4rem
                margin-left:.2rem
        .header-right
            min-width:1.04rem
            padding-left: 0.1rem
            float:right 
            text-align:center
            color:#fff
            .img
                width:.4rem
                height:.4rem
</style>
