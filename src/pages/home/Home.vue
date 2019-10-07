<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperlist="swiperList"></home-swiper>
        <home-icons :iconslist="iconsList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weeked :list="weekendList"></home-weeked>
    </div>
</template>
<script>
import HomeHeader from './components/Header'//引入header.vue组件
import HomeSwiper from './components/swiper'//swiper.vue组件
import HomeIcons from './components/icons'//icons.vue组件
import HomeRecommend from './components/recommend'//recommend.vue组件
import HomeWeeked from './components/weeked'//recommend.vue组件
import axios from 'axios'
import {mapState} from 'vuex'
export default{
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeeked,
    },
    data (){
        return {
            lastCity:[],
            swiperList:[],
            iconsList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city).then(result=>{
                //console.log(result.data.data)
                result=result.data
                if(result.ret&&result.data){
                    this.swiperList=result.data.swiperList
                    this.iconsList=result.data.iconList
                    this.recommendList=result.data.recommendList
                    this.weekendList=result.data.weekendList
                }
            })
        }
    },
    mounted (){
        this.lastCity=this.city
        this.getHomeInfo()
    },
    activated(){
        //当页面重新显示的时候会被重新执行
        //实现性能优化
        if(this.lastCity!==this.city){
            this.lastCity=this.city
            this.getHomeInfo()
        }
    }
}
</script>
<style scoped>

</style>
