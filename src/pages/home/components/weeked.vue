<template>
    <div class="weeked">
        <div class="title">当季景点门票</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgUrl" alt="" class="img">
                </div>
                
                <div class="item-text">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
       name:"HomeWeeked",
       data(){
           return{
               recommendList:[
                   {
                       id:"001",
                       imgUrl:"//img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_256x160_0b11ae8b.jpg",
                       title:"东方明珠",
                       desc:"感受云端漫步，品味老上海风情"
                   },{
                       id:"002",
                       imgUrl:"//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_256x160_2a38358a.jpg",
                       title:"上海迪士尼乐园 ",
                       desc:"迪士尼园区内满120减50"
                   },{
                       id:"003",
                       imgUrl:"//img1.qunarzz.com/sight/p0/1603/8b/8b12625615da783c90.water.jpg_256x160_61b8979d.jpg",
                       title:"上海海湾国家森林公园",
                       desc:"近似自然形态的人工森林"
                   },{
                       id:"004",
                       imgUrl:"//img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_256x160_7cb2ea7e.jpg",
                       title:"上海科技馆",
                       desc:"技术改变生活，只有想不到没有做不到"
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
    .item-img
        overflow:hidden
        height:0
        padding-bottom:33.9%
        .img
            width: 100%
    .item-text
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
</style>
