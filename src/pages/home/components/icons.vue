<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img" :src="item.imgUrl" alt="">
                    </div>
                    <p class="fonts">{{item.desc}}</p>
                </div>
            </swiper-slide>
         </swiper>
    </div>
</template>
<script>
export default{
    name:"HomeIcons",
    data (){
        return {
            iconList:[
                {
                    id:"001",
                    imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                    desc:"酒店"
                },{
                    id:"002",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
                    desc:"机票"
                },
                {
                    id:"003",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png",
                    desc:"周边短途"
                },
                {
                    id:"004",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/freeTravel.png",
                    desc:"自由行"
                },
                {
                    id:"005",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/haiwai.png",
                    desc:"海外酒店"
                },
                {
                    id:"006",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/inn.png",
                    desc:"客栈"
                },
                {
                    id:"007",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/bargainflight.png",
                    desc:"低价机票"
                },
                {
                    id:"008",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/group.png",
                    desc:"特惠酒店"
                },
                {
                    id:"009",
                    imgUrl:"//s.qunarzz.com/homenode/images/touchheader/card.png",
                    desc:"保险车险"
                },
            ]
        }
    },
    computed:{
        pages(){
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
    .icons>>>.swiper-container
        height:0
        padding-bottom:50%
    .icon
        position: relative
        overflow: hidden
        float:left
        width:25%
        height :0
        padding-bottom:25%
        .icon-img 
            position :absolute
            top:0
            left:0
            right:0
            bottom 0.44rem
            box-sizing :border-box
            padding :.1rem
            .img
                height :100%
                display :block
                margin :0 auto
        .fonts
            font-size:.30rem
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:.44rem
            height:.44rem
            color:#333
            text-align:center



</style>