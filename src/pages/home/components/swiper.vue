<template>
  <div class="aswiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default{
    name:"HomeSwiper",
    props:{
      swiperlist:Array//父组件传过来的
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
        return this.swiperlist.length
      }
  }
}
</script>
<style lang="stylus" scoped>
  .aswiper>>>.swiper-pagination-bullet-active
    background-color: #00ffe3
  .aswiper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>