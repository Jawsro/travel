<template>
    <div class="goweek">
        <div class="header-left" @click="a()">
            <img src="../../assets/iconfont/back.png" alt="" class="img">
            <h2 class="title">{{$route.params.id}}</h2>
       </div>
       <ul>
            <li class="item" v-for="(item,index) in goweekList" :key="index" @click="a(item,index)">
                <div class="item-img">
                    <img :src="item.imageUrL" alt="" class="img">
                </div>
                
                <div class="item-text">
                    <p class="item-title">
                        {{item.name}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                    <div class="price">
                        <span class="a">￥</span><em class="color">{{item.price}}</em>起
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'Goweek',
    data(){
        return{
            goweekList:[]
        }
    },
    methods:{
        a(){
            this.$router.go(-1)
        },
        getGoweekList(){
            //console.log(this.$route.params.id)
            axios.get("/static/mock/weeklist.json",{params:{sightName:this.$route.params.id}})
            .then(res=>{
                //console.log(res.data)
                let arr=[]
                for(let i in res.data){
                    if(res.data[i].sightName==this.$route.params.id){
                        arr.push(res.data[i])
                    }
                }
                this.goweekList=arr[0].categoryList
                console.log(arr,typeof arr)
                console.log(this.goweekList)
            })
        }
       
    },
    mounted(){
        this.getGoweekList()
    }

}
</script>

<style lang="stylus" scoped>
    .header-left
        position:relative 
        background-color:#00bcd4
        line-height:.86rem
        .img
            position:absolute
            top:50%
            margin-top:-.2rem
            width:.4rem
            height:.4rem
            margin-left:.2rem   
        .title
            text-align:center
            font-size: 0.32rem
            color:#fff
            font-weight:500    
    .item
        background:#f5f5f5
        margin-top:.1rem
        .item-img
            overflow:hidden
            height:0
            padding-bottom:37.09%
            .img
                width: 100%
        .item-text
            position: relative
            padding:.1rem
            .item-title
                line-height:.54rem
                font-size: .36rem
            .item-desc
                line-height:.4rem
                font-size: .26rem
                color:#8a7e7e
        .price
            position:absolute
            top:.25rem
            right:.2rem
            .a
                color:#ff8300
            .color
                color:#ff8300
                font-weight: 600
                font-size: .36rem
</style>