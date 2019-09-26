<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>
<script>
import HomeHeader from './components/Header'//引入header.vue组件
import HomeSwiper from './components/swiper'//swiper.vue组件
import HomeIcons from './components/icons'//icons.vue组件
    export default{
       name:"Home",
       components:{
           HomeHeader,
           HomeSwiper,
           HomeIcons,
       }
    }
</script>
<style scoped>

</style>
