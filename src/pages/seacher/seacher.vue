<template>
    <div class="seacher">
        <seacher-header :scenicspot="scenicspot"></seacher-header>
        <seacher-list :seacherlist="seacherlist"></seacher-list>
 
    </div>
</template>
<script>
import SeacherHeader from './components/header'//引入header.vue组件
import SeacherList from './components/list'//引入list.vue组件
import axios from 'axios'
export default{
    name: 'Seacher',
    data(){
        return{
            seacherlist:[],
            scenicspot:''
        }
    },
    components:{
        SeacherHeader,
        SeacherList
    },
    methods:{
        getseacherlist:function (){
            axios.get('/static/mock/seacher.json',{params:{city:this.$store.getters.getCity}}).then(result=>{
                console.log(result.data,this.$store.getters.getCity)
                //console.log(this.city)
                let arr=[];
               for(let key in result.data){
                   //console.log(result.data[key])
                   if(result.data[key].city==this.$store.getters.getCity){
                       arr.push(result.data[key])
                    }
               }
                console.log(arr)
                this.seacherlist=arr
            })
    
        }
    },
    mounted(){
        this.getseacherlist()
    }
}
</script>

<style lang="stylus" >
   
            
</style>