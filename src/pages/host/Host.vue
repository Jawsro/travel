<template>
    <div class="host">
        <host-header></host-header>
        <host-swiper  :swiperList="swiperList" ></host-swiper>
        <div class="title1">火热路线</div>
        <div v-for="item in hostList" :key="item.id" class="hostlist">
            <div class="item">
                <img :src="item.imgUrl" alt="" class="img">
                <div class="mask">
                    <p class="way">{{item.way}}</p>
                    <p class="day">{{item.day}}</p>
                </div>
            </div>
            <p class="title">{{item.title}}</p>
            <p class="price">
                <span>￥</span>
                <em>{{item.price}}</em>
            </p>
            
        </div>
    </div>
</template>
<script>
import HostSwiper from '../../commen/swiper/swiper'//引入swiper.vue组件轮播图公共组件
import HostHeader from '../../commen/header/header'//引入swiper.vue组件头部公共组件
import axios from 'axios'
    export default{
        name:"Host",
        components:{
            HostSwiper,
            HostHeader
        },
        data(){
            return {
                hostList:[],//火热路线
                swiperList:[],//banner图
                city:''//城市
            }
        },
    
        methods:{
            getHostList(){
                this.city=this.$store.getters.getCity
                //获取banner
                axios.get('/static/mock/index.json?city='+this.city).then(result=>{
                console.log(result.data)
                result=result.data
                if(result.ret&&result.data){
                    this.swiperList=result.data.swiperList1
                }
            })
            //火热路线
                axios.get("/static/mock/dangji.json",{params:{city:this.$store.getters.getCity}}).then(res=>{
                    console.log(res.data.data.djList);
                    let arr=[];
                    let list=res.data.data.djList;
                    for(let key in list){
                        if(list[key].city==this.$store.getters.getCity){
                            arr.push(list[key])
                        }
                    }
                    this.hostList=arr;
                    console.log(this.hostList,this.city)
                })
            }
        },
        mounted(){
            this.getHostList()
        }
    }
</script>
<style lang="stylus" scoped>
    
    .title1
        line-height:.8rem
        background:#eee
        text-indent:.2rem
        margin-top:.2rem
    .aswiper
        margin-top:10px
    .hostlist
        float:left
        width:40%
        margin-left:6%
        margin-top:20px
        .item
            width:100%
            position:relative
            .img
                width:100%
                border-radius:5px
            .mask
                background-color:rgba(0,0,0,.5)
                width:60%
                height:40px
                position :absolute
                bottom:0
                left:50%
                margin-left: -30%
                text-align:center
                .way 
                    color:#fff
                    font-size:14px
                    margin-top:6px
                .day 
                    color:#ffde00
                    font-size:12px
                    margin-top:3px
        .title
            text-overflow: ellipsis
            overflow: hidden
            white-space: nowrap
            margin-top:5px
        .price
            color:#ff7400
            font-size:.32rem
            font-weight:600
            margin-top:5px
        
</style>