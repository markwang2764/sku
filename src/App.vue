<template>
  <div id="app">
      <transition :name="transitionName">
        <keep-alive>
           <router-view></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
import {eventHub} from './eventhub.js'
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  created () {
    eventHub.$on('backword', () => {
      this.transitionName = 'slide-right'
    })
  },
  watch: {
    '$route' (to, from) {
      if (to.name === undefined) {
        return
      }
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
#app{
  position: relative;
}
.slide-left-enter-active {
  animation-name: slide-left-in;
  animation-duration: .5s;
}
.slide-left-leave-active {
  animation-name: slide-left-out;
  animation-duration: .5s;
  position:absolute;
}
@keyframes slide-left-in {
  0% {
     transform: translate(100%);
   }
   100% {
     transform: translate(0%);
   }
}
@keyframes slide-left-out {
  0% {
     transform: translate(0);
   }
   100% {
     transform: translate(-100%);
   }
}
.slide-right-enter-active {
  animation-name: slide-right-in;
  animation-duration: .5s;
}
.slide-right-leave-active {
  animation-name: slide-right-out;
  animation-duration: .5s;
  position:absolute;
}
@keyframes slide-right-in {
  0% {
     transform: translate(-100%);
   }
   100% {
     transform: translate(0%);
   }
}
@keyframes slide-right-out {
  0% {
     transform: translate(0%);
   }
   100% {
     transform: translate(100%);
   }
}
</style>
