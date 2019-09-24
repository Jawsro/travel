<template>
    <div class="header">
       <div class="header-left">
           <div>
               <img src="../../../assets/iconfont/back.png" alt="" class="img">
           </div>
       </div>
       <div class="header-input">
           <span><img src="../../../assets/iconfont/search.png" alt="" class="img"></span>
           输入城市/景点/游玩主题
        </div>
       <div class="header-right">
           城市
            <span><img src="../../../assets/iconfont/jt.png" alt="" class="img"></span>
        </div>
    </div>
</template>
<script>
    export default{
       name:"HomeHeader"
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
            width:1.24rem
            float:right 
            text-align:center
            .img
                width:.4rem
                height:.4rem
</style>
