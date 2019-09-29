<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'//引入header.vue组件
import CitySearch from './components/Search'//引入Search.vue组件
import CityList from './components/List'//引入List.vue组件
import CityAlphabet from './components/Alphabet'//引入Alphabet.vue组件
export default{
    name:"City",
    data (){
        return {
           
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    }
}
</script>
<style scoped>

</style>
