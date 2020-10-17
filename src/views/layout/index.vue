<template>
  <div>
    <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>

    <!-- 底部标签栏 -->
    <van-tabbar route class="layout-container-bar" :active-color="'#e5142c'">
      <van-tabbar-item to="/">
        <i slot="icon" class="toutiao toutiao-shouye"></i>
        <span>首页</span>

      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <!-- <i slot="icon" class="toutiao toutiao-wenda"></i> -->
        <span>攻略</span>

      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <!-- <i slot="icon" class="toutiao toutiao-shipin"></i> -->
        <span>+</span>

      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <!-- <i slot="icon" class="toutiao toutiao-shipin"></i> -->
        <span>关注</span>

      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <!-- <i slot="icon" class="toutiao toutiao-wode"></i> -->
        <span>我的</span>

      </van-tabbar-item>
    </van-tabbar>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
