<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>
<script>
import HomeHeader from './components/Header'//引入header.vue组件
import HomeSwiper from './components/swiper'//引入header.vue组件
    export default{
       name:"Home",
       components:{
           HomeHeader,
           HomeSwiper
       }
    }
</script>
<style scoped>

</style>
