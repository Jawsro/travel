<template>
    <div>
        <div class="banner" @click="hanldBanner"> 
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}{{grade}}</div>
                <div class="banner-num">
                    <span><img src="../../../assets/iconfont/img2.png" alt="" class="img"></span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <commen-gallary 
                :imags="gallaryImgs" 
                v-show="showGallary"
                @close="handlGallaryClose">
            </commen-gallary>
        </fade-animation>
    </div>
</template>
<script>
import CommenGallary from '../../../commen/gallary/Gallary'//引入Gallary.vue组件
import FadeAnimation from '../../../commen/fade/animation'//引入Fade.vue组件
export default{
    name: 'DetailBanner',
    props:{
        bannerImg:String,
        sightName:String,
        grade:String,
        gallaryImgs:Array
    },
    data(){
        return {
            showGallary:false
        }
    },
    //注册局部组件
    components:{
        CommenGallary,
        FadeAnimation
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
