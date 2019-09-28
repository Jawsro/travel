<template>
    <div>
        <home-header :city="city"></home-header>
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
            city:'',
            swiperList:[],
            iconsList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('/static/mock/index.json').then(result=>{
                console.log(result.data.data)
                result=result.data
                if(result.ret&&result.data){
                    const data=result.data.data
                    this.city=result.data.city
                    this.swiperList=result.data.swiperList
                    this.iconsList=result.data.iconList
                    this.recommendList=result.data.recommendList
                    this.weekendList=result.data.weekendList
                }
            })
        }
    },
    mounted (){
        this.getHomeInfo()
    }
}
</script>
<style scoped>

</style>
