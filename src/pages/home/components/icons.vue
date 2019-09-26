<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="img" src="http://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt="">
            </div>
            <p class="fonts">酒店</p>
        </div>
         <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/flight.png" alt="">
            </div>
            <p class="fonts">机票</p>
        </div> <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/package.png" alt="">
            </div>
            <p class="fonts">度假</p>
        </div> <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/train.png" alt="">
            </div>
            <p class="fonts">火车票</p>
        </div> <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/piao.png" alt="">
            </div>
            <p class="fonts">景点门票</p>
        </div> <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/haiwai.png" alt="">
            </div>
            <p class="fonts">海外酒店</p>
        </div> <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/freeTravel.png" alt="">
            </div>
            <p class="fonts">自由行</p>
        </div> <div class="icon">
            <div class="icon-img">
                <img class="img" src="//s.qunarzz.com/homenode/images/touchheader/travel.png" alt="">
            </div>
            <p class="fonts">攻略</p>
        </div>
    </div>
</template>
<script>
export default{
    name:"HomeIcons"
}
</script>
<style lang="stylus" scoped>
    .icons
        overflow: hidden
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