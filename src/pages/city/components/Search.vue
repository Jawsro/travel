<template>
    <div class="saerch">
        <input type="text" placeholder="输入城市名或者拼音" class="saerch-input">
    </div>
</template>
<script>

export default{
    name:"CitySearch",
    data (){
        return {
           
        }
    }
}
</script>
<style lang="stylus" scoped>
    .saerch
        height: 0.72rem
        background:#00bcd4
        padding:0 .1rem
        .saerch-input
            box-sizing:border-box
            width:100%
            height: 0.62rem
            list-height: 0.62rem
            text-align:center
            border-radius: 0.06rem
            color: #666
</style>
