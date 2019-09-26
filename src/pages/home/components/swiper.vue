<template>
    <div class="aswiper">
         <swiper :options="swiperOption">
            <swiper-slide><img src="../../../assets/banner/aa.jpg" alt="" class="swiper-img"></swiper-slide>
            <swiper-slide><img src="../../../assets/banner/bb.jpg" alt="" class="swiper-img"></swiper-slide>
            <swiper-slide><img src="../../../assets/banner/cc.jpg" alt="" class="swiper-img"></swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>
           
            
        </swiper>
    </div>
</template>
<script>
export default{
    name:"HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination:".swiper-pagination",
          loop:true
        }
      }
    }
}
</script>
<style lang="stylus" scoped>
    .aswiper>>>.swiper-pagination-bullet-active
        background :white
    .swiper-img
        width :100%
</style>