<template>
    <div class="weeked">
        <div class="title">周末去哪儿</div>
        <ul>
            <router-link tag="li" :to="'/goweek/' + item.name" class="item" v-for="item of list" :key="item.id">
                <div class="item-img">
                    <img :src="item.imageUrL" alt="" class="img">
                </div>
                
                <div class="item-text">
                    <p class="item-title">
                        {{item.name}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default{
    name:"HomeWeeked",
    props:{
        list:Array
    }
}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/style/mixins.styl'
    .title
        line-height:.8rem
        background:#eee
        text-indent:.2rem
        margin-top:.2rem
    .item
        background:#f5f5f5
        margin-top:.1rem
        .item-img
            overflow:hidden
            height:0
            padding-bottom:37.09%
            .img
                width: 100%
        .item-text
            padding:.1rem
            .item-title
                line-height:.54rem
                font-size:.32rem
            .item-desc
                line-height:.4rem
                color:#8a7e7e
                ellipsis()
</style>
