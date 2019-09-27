<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
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
            </li>
        </ul>
    </div>
</template>
<script>
export default{
       name:"HomeRecommend",
       data(){
           return{
               recommendList:[
                   {
                       id:"001",
                       imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/d7d2a1a1-7426-47b4-bdfb-f2beceb4c0cf.jpg_r_390x260x90_dc4369cb.jpg",
                       title:"北京-菲律宾 7天自由行",
                       desc:"中秋国庆提前购！北京出发长滩岛6-8天+四星阿兰达酒店+接送机+可升级酒店"
                   },{
                       id:"002",
                       imgUrl:"//imgs.qunarzz.com/p/tts5/1606/f4/fab1ba13e66fe79a.jpg_r_390x260x90_6170ed89.jpg",
                       title:"北京-厦门 5天自由行",
                       desc:"国庆秒抢！3晚厦门海边别墅+1晚鼓浪屿，接送机+赠网红植物园+钟鼓索道+船票"
                   },{
                       id:"003",
                       imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/e6503621-e200-4b13-8822-f68b0625cb17.jpg_r_480x320x90_c8854043.jpg",
                       title:"北京-八达岭长城 1天跟团游",
                       desc:"【八达岭长城】7点早出发避高峰纯玩无购物一日游 赠水赠好汉证书 多时间可选"
                   },{
                       id:"004",
                       imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/fb5fbf5c-4f85-482b-91d6-4ce17a42618d.jpg_r_390x260x90_aae85edf.jpg",
                       title:"北京-海南 6天跟团游",
                       desc:"迎国庆！付100抵300🔥住1线海景房玩双岛|蜈支洲+分界洲+天涯三亚6日"
                   }
               ]
           }
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
