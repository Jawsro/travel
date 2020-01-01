<template>
<div>
    <div class="header">
        <div class="header-left">
           <div @click="goback()">
               <img src="../../../assets/iconfont/back.png" alt="" class="img">
           </div>
       </div>
       <div class="header-input">
           <span><img src="../../../assets/iconfont/search.png" alt="" class="img"></span>
           <input type="text" placeholder="输入城市/景点" class="input" v-model="keyword"/>
       </div>
        <div>
            <div class="header-right">
                搜索
            </div>
        </div>
        
    </div>
    <div class="search-scenicspot">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>

export default{
    name: 'Header',
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        goback:function () {
            this.$router.go(-1)
          }
    }

}
</script>

<style lang="stylus" >
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
            border-radius:2.1rem
            .img
                width:.4rem
                height:.4rem
                margin-left:.2rem
            .input
                width: 80%
                height: .60rem
                line-height:.60rem
                text-align:center
                font-size:.32rem
                color:#000
        .header-right
            min-width:1.04rem
            padding-left: 0.1rem
            float:right 
            text-align:center
            color:#fff
        .search-scenicspot
            width:100%
            height: 500px
            border: 1px solid red  
            z-index: 99  
</style>