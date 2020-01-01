<template>
    <div class="list">
        <div class="title">猜你喜欢</div>
        <ul>
            <router-link :to="'/detail/' + item.title" 
                        tag="li" class="item" 
                        v-for="item of seacherlist" 
                        :key="item.id"
                    >
                <img :src="item.imgUrl" alt="" class="img">
                <div class="item-text">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        <span class="color">￥</span><span class="perice">{{item.perice}}</span>起
                    </p>
                    <div class="item-button">
                        <span>{{item.palace}}</span>
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>

export default{
    name: 'List',
    data(){
        return{
           
        }
    },
    props:{
         seacherlist:Array
    }
}
</script>

<style lang="stylus" >
    .title
        height:.7rem
        background:#f2f2f2
        line-height:.7rem
        font-size:.32rem  
        font-weight:550
        margin-bottom:.3rem
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
                margin-top:.1rem
                .color
                    color:#ff9300
                    font-size:.2rem
                .perice
                    color:#ff9300
                    font-size:.38rem
                    font-size:600
            .item-button
                line-height:.44rem
                margin-top:.1rem
</style>