<template>
    <div>
        <detail-banner 
            :bannerImg="bannerImg"
            :sightName="sightName"
            :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from './components/banner'//引入banner.vue组件
import DetailHeader from './components/header'//引入header.vue组件
import DetailList from './components/list'//引入list.vue组件
import axios from 'axios'
export default{
    name: 'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            list:[],
            bannerImg:'',
            sightName:'',
            gallaryImgs:[]
        }
    },
    methods:{
        getDetail(){
            axios.get('/api/detail.json?',
                    {params:{
                        id:this.$route.params.id}
                    
                    }).then(result=>{
                        console.log(result.data)
                        result=result.data
                        if(result.ret&&result.data){
                            this.list=result.data.categoryList
                            this.bannerImg=result.data.bannerImg
                            this.sightName=result.data.sightName
                            this.gallaryImgs=result.data.gallaryImgs
                        }
               
            })
        }
    },
    mounted(){
        this.getDetail()
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height:50rem
</style>
