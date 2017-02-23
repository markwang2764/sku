<template>
  <div class="hello">
<header-bar :back-to-web="true" :title="title"></header-bar>
    <router-link :to="{name: 'sku-home-page'}">
      后退
    </router-link>
  </div>
</template>

<script>
import headerBar from '../../common/header-bar.vue'
export default {
  name: 'hello',
  data () {
    return {
      title: '222'
    }
  },
  mounted () {
    // this.$store.dispatch('setData', 'getModelLibraryLists')
  },
  components: { headerBar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100vh;
  width: 100vw;
}
</style>
