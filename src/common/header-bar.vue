<template lang="html">
  <!-- <div class="header-bar-container"> -->
    <div class="header-bar">
      <div v-if="!backToWeb && !backToApp" class="empty"></div>
      <div v-if="backToWeb" class="back-to-web back" @click="goBackToWeb"><a></a></div>
      <div v-if="backToApp" class="back-to-app back" @click="goBackToApp"><a></a></div>
      <div class="bar-title" v-text="title"></div>
      <div class="empty"></div>
    </div>
<!--   </div> -->
</template>

<script>
import { setupWebViewJavascriptBridge } from 'assets/js/common'
import {eventHub} from '../eventhub.js'
export default {
  data () {
    return {}
  },
  props: ['backToWeb', 'backToApp', 'title'],
  methods: {
    goBackToWeb () {
      this.$router.go(-1)
      eventHub.$emit('backword')
      return
    },
    goBackToApp () {
      setupWebViewJavascriptBridge((bridge) => {
        bridge.callHandler('YMDJSBridge_Back', {}, () => {})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.fix-height-top {
  height: 50px;
}
.header-bar {
  display: flex;
  height: 50px;
  line-height: 50px;
  font-size: 1.6rem;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  >div {
    height: 50px;
    flex: 1;
    display: flex;
    &.back {
      align-items: center;
      a {
        display: inline-block;
        height: 2rem;
        width: 1.6rem;
        margin-left: 1.5rem;
        background-image: url(../assets/img/back.svg);
        background-repeat: no-repeat;
        background-size: 60%;
      }
    }
    &.bar-title {
      justify-content: center;
    }
    &.share {
      align-items: center;
      justify-content: flex-end;
      a {
        display: inline-block;
        height: 2rem;
        width: 1.6rem;
        margin-right: 2rem;
        background-image: url(../assets/img/share.svg);
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>
