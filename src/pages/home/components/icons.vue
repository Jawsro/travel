<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id" @click="gotoPage(item.id)">
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
    props:{
        iconslist:Array,
        city:String,
        
    },
    data (){
        return {
            a:0
        }
    },
    computed:{
        pages(){
            const pages=[]
            this.iconslist.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    },
    methods:{
        gotoPage:function(id){
            console.log(id,this.city);
            if(id=="0007"){
                this.$router.push({
                    path:'/Host',
                    query:{
                        city:this.city
                    }
                    });
            }
            if(id=="0001"){
                this.$router.push({
                    path:'/ticket',
                    query:{
                        city:this.city
                    }
                    });
            }
            if(id=="0002"){
                this.$router.push({
                    path:'/must',
                    });
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .icons>>>.swiper-container
        height:0
        padding-bottom:50%
    .icons
        margin-top:.2rem
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