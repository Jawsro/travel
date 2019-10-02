<template>
<div>
    <div class="saerch">
        <input 
            v-model="keyword" 
            type="text" 
            placeholder="输入城市名或者拼音" 
            class="saerch-input"/>
    </div>
    <div class="search-contant" ref="search" v-show="keyword">
        <ul>
            <li v-for="item of list" 
                :key="item.id"
                class="saerch-item border-bottom "
            >
                {{item.name}}
            </li>
             <li class="saerch-item border-bottom " v-show="hasNoData">
               没有找到匹配数据
            </li>
        </ul>
    </div>
</div>
    
</template>
<script>
import BScroll from 'better-scroll'
export default{
    name:"CitySearch",
    props:{
        cities:Object
    },
    data (){
        return {
           keyword:"",
           list:[],
           timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    watch:{
        keyword (){
            console.log(this.keyword)
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return 
            }
            this.timer=setTimeout(()=>{
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        console.log(value.spell.indexOf(this.keyword),value.spell);
                        if(value.spell.indexOf(this.keyword)==0 || value.name.indexOf(this.keyword)==0){
                            result.push(value)
                        }
                    });
                }
                this.list=result
            },100)
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.search)
    },
}
</script>
<style lang="stylus" scoped>
    .saerch
        height: 0.72rem
        background:#00bcd4
        padding:0 .1rem
        .saerch-input
            box-sizing:border-box
            width:100%
            height: 0.62rem
            list-height: 0.62rem
            text-align:center
            border-radius: 0.06rem
            color: #666
    .search-contant
        overflow:hidden
        position:absolute
        top:1.58rem
        left:0
        bottom:0
        right:0
        background:#eee
        z-index:1
        .saerch-item
            line-height:.62rem
            padding-left:.2rem
            background: #fff
            color: #666
</style>
