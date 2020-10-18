<template>
 <div id="app">
    <keep-alive>
      <!-- <--! 需要缓存的-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <!-- <transition enter-active-class="slide-forward" leave-active-class="slide-back"> -->

    <transition
      enter-active-class="animated animate__zoomIn"
      leave-active-class="animated animate__zoomInUp"
    >
      <!-- <--! 不需要缓存的-->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<style lang="less">
</style>
