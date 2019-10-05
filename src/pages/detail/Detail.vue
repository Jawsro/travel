<template>
    <div>
        <detail-banner></detail-banner>
    </div>
</template>
<script>
import DetailBanner from './components/banner'//引入banner.vue组件
import axios from 'axios'
export default{
    name: 'Detail',
    components:{
        DetailBanner,
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

</style>
