<template>
  <div id="app">
    <!--路由加载过一次之后就把加载过的内容放在keep-alive内存中下次进来的时候不需要重新加载，直接从内存中取出来使用-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
