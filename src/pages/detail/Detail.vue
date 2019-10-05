<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>
<script>
import DetailBanner from './components/banner'//引入banner.vue组件
import DetailHeader from './components/header'//引入header.vue组件
import axios from 'axios'
export default{
    name: 'Detail',
    components:{
        DetailBanner,
         DetailHeader
    },
    methods:{
        getDetail(){
            axios.get('/static/mock/detail.json').then(result=>{
                console.log(result.data)
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
