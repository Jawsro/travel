<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" 
                    :hotCities="hotCities"
                    :letter="letter">
        </city-list>
        <city-alphabet :cities="cities"
                        @change="handChange">
        </city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'//引入header.vue组件
import CitySearch from './components/Search'//引入Search.vue组件
import CityList from './components/List'//引入List.vue组件
import CityAlphabet from './components/Alphabet'//引入Alphabet.vue组件
import axios from 'axios'
export default{
    name:"City",
    data (){
        return {
           cities:{},
           hotCities:[],
           letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(result=>{
                //console.log(result.data.data)
                result=result.data
                if(result.ret&&result.data){
                    this.cities=result.data.cities
                    this.hotCities=result.data.hotCities
                }
            })
        },
        handChange(letter){
            this.letter=letter
            //console.log(letter)
        }
    },
    mounted (){
        this.getCityInfo()
    }
}
</script>
<style scoped>

</style>
