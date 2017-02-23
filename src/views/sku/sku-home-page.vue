<template>
  <div class="skuHomePage">
<header-bar :title="title"></header-bar>
    <router-link :to="{name: 'hello'}">
      前进hhhhhhhh
    </router-link>
    <div class="da">
     {{skudata}}
    </div>
  </div>
</template>

<script>
import headerBar from '../../common/header-bar.vue'
export default {
  name: 'sku-home-page',
  data () {
    return {
      title: '购物车'
    }
  },
  created () {
    this.$store.dispatch('getData', 'appData')
  },
  mounted () {
  },
  computed: {
    skudata () {
      return this.$store.state.sku.skuData.data
    }
  },
  components: { headerBar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skuHomePage{
  height: 100vh;
  width: 100vw;
}
</style>
