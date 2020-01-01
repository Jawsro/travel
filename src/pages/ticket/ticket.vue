<template>
    <div class="ticket">
        <host-header></host-header>
      <div class="title1">必有景点推荐</div>  
      <!-- swiper -->
      <swiper :options="swiperOption">
            <swiper-slide v-for="item in ticket" :key="item.id" style="" >
                <router-link :to="'/detail/'+item.name" tag="div">
                <img class="swiper-img" :src="item.imageUrL"/>
                <p class="name">{{item.name}}</p>
                <p class="price"><span class="color">￥</span><span class="color">{{item.price}}</span>起</p>
                </router-link>
            </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import HostHeader from '../../commen/header/header'//引入swiper.vue组件头部公共组件
import axios from 'axios'
export default{
    name: 'Ticket',
    components:{
            HostHeader
        },
     data() {
      return {
        city:'',
        ticket:[],//本周热门榜单排行
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    created(){
        //console.log("我执行了")
    },
    methods:{
        getTicket(){
            this.city=this.$route.query.city
            axios.get("/static/mock/ticket.json",{params:{city:this.city}})
            .then(res=>{
                console.log(res.data)
                let arr=[];
                for(let i in res.data){
                    if(res.data[i].city==this.city){
                        arr.push(res.data[i])
                    }
                }
                this.ticket=arr;
                console.log(this.ticket,this.city)
            })
            
        }
    },
    mounted(){
        this.getTicket()
    }

}
</script>

<style lang="stylus" >
    .ticket /deep/ .swiper-wrapper
        padding-bottom :30px
    .ticket /deep/ .swiper-pagination-bullet-active
        background-color: #00ffe3
    .ticket /deep/ .swiper-slide
        margin-right:0px !important 
        width:33.33% !important
    .title1
        line-height:.9rem
        background:#eee
        text-indent:.2rem
        font-weight:550
        font-size:.4rem
        margin-top:.2rem
        margin-bottom:.2rem
    .ticket .swiper-img
        display:block
        width:90%
        margin:0 auto
        border-radius .3rem
    .name
        text-align:center
        margin-top:6px
        font-size:13px
    .price
        text-align:center
        margin-top:3px
        font-size:13px
        .color
            color:#ff8300
            
</style>