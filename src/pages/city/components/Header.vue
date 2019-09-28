<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="header-back">
                <img src="../../../assets/iconfont/back.png" alt="" class="img header-back">
            </div>
        </router-link>
    </div>
</template>
<script>

export default{
    name:"CityHeader",
    data (){
        return {
           
        }
    }
}
</script>
<style lang="stylus" scoped>
    .header
        position:relative
        overflow:hidden
        height:0.86rem
        line-height:.86rem
        text-align:center
        color:#fff
        background:#00bcd4
        font-size:.32rem
        .header-back
            position:absolute
            top:0.1rem
            left:0.1rem
            width:.4rem
            height:.4rem
            
</style>
