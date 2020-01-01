<template>
    <div>
        <detail-banner 
            :bannerImg="bannerImg"
            :sightName="sightName"
            :grade="grade"
            :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header :sightName="sightName"></detail-header>
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
            grade:'',
            gallaryImgs:[]
        }
    },
    methods:{
        getDetail(){
            axios.get('/static/mock/detai1l.json?',
                    {params:{
                        sightName:this.$route.params.id
                        }
                    
                    }).then(result=>{
                        //console.log(result.data,this.$route.params.id)
                        let arr=[];
                        for(let i in result.data){
                            //console.log(result.data[i].sightName)
                            if(result.data[i].sightName===this.$route.params.id){
                                arr.push(result.data[i])
                                 this.list=arr[0].categoryList
                                 this.bannerImg=arr[0].bannerImg
                                 this.sightName=arr[0].sightName
                                 this.grade=arr[0].grade
                                 this.gallaryImgs=arr[0].gallaryImgs
                            }
                        }
                        //console.log(arr)
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
