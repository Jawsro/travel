<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>
<script>
import CityHeader from './components/Header'//引入header.vue组件
import CitySearch from './components/Search'//引入header.vue组件
export default{
    name:"City",
    data (){
        return {
           
        }
    },
    components:{
        CityHeader,
        CitySearch
    }
}
</script>
<style scoped>

</style>
