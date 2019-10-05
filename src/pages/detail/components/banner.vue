<template>
    <div>
        <div class="banner" @click="hanldBanner"> 
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                <div class="banner-num">
                    <span><img src="../../../assets/iconfont/img2.png" alt="" class="img"></span>
                    39
                </div>
            </div>
        </div>
        <commen-gallary 
            :imags="imags" 
            v-show="showGallary"
            @close="handlGallaryClose">
        </commen-gallary>
        
    </div>
</template>
<script>
import CommenGallary from '../../../commen/gallary/Gallary'//引入Gallary.vue组件

export default{
    name: 'DetailBanner',
    data(){
        return {
            imags:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"],
            showGallary:false
        }
    },
    components:{
        CommenGallary,
       
    },
    methods:{
        hanldBanner(){
            this.showGallary=true
        },
        handlGallaryClose(){
            this.showGallary=false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        position:relative
        overflow:hidden
        height:0
        padding-bottom:50%
        .banner-img 
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:0.6rem
            color:#fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex:1
                font-size:0.32rem
                padding:.2rem
            .banner-num
                height:0.32rem
                line-height:0.32rem
                padding:.2rem
                margin-top:.14rem  
                border-radius:.2rem
                background: rgba(0, 0, 0, .8)
                font-size: 0.24rem
                .img
                    width:.24rem
                    height:.24rem
</style>
