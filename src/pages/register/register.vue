<template>
    <div class="register">
       <register-header></register-header>
    </div>
</template>
<script>
import RegisterHeader from './components/header'//引入header.vue组件
export default{
    name: 'Register',
    components:{
        RegisterHeader

    },
    mounted(){
        console.log("我执行了")
       
    }

}
</script>

<style lang="stylus" scoped>
   
            
</style>