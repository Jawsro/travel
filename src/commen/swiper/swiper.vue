<template>
  <div class="aswiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(item,index) of swiperList" :key="index">
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default{
    name:"HostSwiper",
    props:{
        swiperList:{
            type:Array,
            default (){
                return []
            }
        }
      },  
    data() {
      return {
        swiperOption: {
          pagination:{el:".swiper-pagination"},
          loop:true,
          autoplay:true
        }
      }
    },
     computed: {
      showSwiper () {
        return this.swiperList.length
      }
     }
}
</script>
<style lang="stylus" scoped>
  .aswiper>>>.swiper-pagination-bullet-active
    background-color: blue
  .aswiper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
      height:100%
</style>