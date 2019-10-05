<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <ul>
            <router-link :to="'/detail/' + item.id" 
                        tag="li" class="item" 
                        v-for="item of list" 
                        :key="item.id"
                    >
                <img :src="item.imgUrl" alt="" class="img">
                <div class="item-text">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default{
       name:"HomeRecommend",
       props:{
           list:Array
       }
       
}
</script>
<style lang="stylus" scoped>
    .title
        line-height:.8rem
        background:#eee
        text-indent:.2rem
        margin-top:.2rem
    .item
        overflow:hidden
        display:flex
        height:1.9rem
        .img
            width: 1.7rem
            height: 1.7rem
            padding:.1rem
        .item-text
            min-width:0
            flex:1
            padding:.1rem
            .item-title
                line-height:.54rem
                font-size:.32rem
            .item-desc
                line-height:.4rem
                color:#ccc
                overflow:hidden
                white-space:nowrap
                text-overflow:ellipsis
            .item-button
                line-height:.44rem
                background:#ff9300
                padding:0 .2rem
                border-radius:.06rem
                color:#fff
                margin-top:.1rem
</style>
