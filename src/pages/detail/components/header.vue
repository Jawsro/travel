<template>
    <div>
        <div class="header-abs"  @click="boBack()" v-show="showAbs">
            <img src="../../../assets/iconfont/back.png" alt="" class="img">
        </div> 
        <div class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle">
            {{sightName}}
            <router-link to="/">
            <div class="header-fixed-back" >
                <img src="../../../assets/iconfont/back.png" alt="" class="img header-fixed-back">
            </div>
        </router-link>
        </div>
    </div>
</template>
<script>

export default{
    name: 'DetailHeader',
    props:{
        sightName:String
    },
    data(){
        return {
            showAbs:true,
            opacityStyle:{
               opacity:0 
            }
        }
    },
    methods:{
        boBack(){
            this.$router.go(-1)
        },
        handelScroll(){
            //console.log(document.documentElement.scrollTop)
            const top=document.documentElement.scrollTop
            if(top>60){
                const opacity=top/140
                this.opacityStyle={opacity}
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
     mounted(){
        window.addEventListener("scroll",this.handelScroll)
    },
    unmounted(){
         window.removeEventListener("scroll",this.handelScroll)
    }

}
</script>
<style lang="stylus" scoped>
    .header-abs
        position:absolute
        left:0.2rem
        top:.2rem
        width:.8rem
        height:.8rem
        border-radius:.4rem
        background:rgba(0,0,0,.8)
        .img
            width:.4rem
            height:.4rem
            position:absolute
            top:.2rem
            left 0.2rem
    .header-fixed
        z-index:99
        position:fixed
        top:0
        left:0
        right:0
        overflow:hidden
        height:0.86rem
        line-height:.86rem
        text-align:center
        color:#fff
        background:#00bcd4
        font-size:.32rem
        .header-fixed-back
            position:absolute
            top:0.1rem
            left:0.1rem
            width:.4rem
            height:.4rem

</style>
