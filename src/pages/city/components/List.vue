<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper">
                            <div class="btn"> {{$store.getters.getCity}}</div>
                        </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper" 
                        v-for="item of hotCities" 
                        :key="item.id"
                        @click="hanldCityclick(item.name)">
                        <div class="btn">{{item.name}}</div>
                    </div>
                    
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                        v-for='inner of item' 
                        :key="inner.id"
                        :ref="key"
                        @click="hanldCityclick(inner.name)">
                        {{inner.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
    name:"CityList",
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
        console.log(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
            console.log(this.letter)
        }
    },
    methods:{
        hanldCityclick(city){
            this.$store.commit("changeCity",city)
            this.$router.push("/")
            // this.$router.go(-1)
        },
       
    }
}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/style/varibles.styl'
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .border-bottom
        &:before
            border-color:#ccc
    .list
        overflow:hidden
        position:absolute
        top:1.58rem
        left:0
        right:0
        bottom:0
        .title      
            line-height: 0.44rem
            background:#eee
            padding-left:.2rem
            color:#666
            font-size:.26rem
        .btn-list
            padding:.1rem .6rem .1rem .1rem
            overflow:hidden   
            .btn-wrapper
                width:33.33%
                float:left
                .btn
                    padding:.1rem 0
                    margin:.1rem
                    text-align:center
                    border:.02rem solid #ccc
                    border-radius:.06rem  
        .item-list
            .item
                line-height: 0.76rem 
                padding-left:.2rem 
                
</style>
