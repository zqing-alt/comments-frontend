<template>
  <div>
    <div class="layout-container">
    <!-- 子路由 -->
    <router-view></router-view>

    <!-- 底部标签栏 -->
    <van-tabbar route class="layout-container-bar" :active-color="'#e5142c'">
      <van-tabbar-item to="/">
        <!-- <i slot="icon" class="toutiao toutiao-shouye"></i> -->
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <!-- <i slot="icon" class="toutiao toutiao-wenda"></i> -->
        攻略
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <!-- <i slot="icon" class="toutiao toutiao-shipin"></i> -->
        +
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <!-- <i slot="icon" class="toutiao toutiao-shipin"></i> -->
        关注
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <!-- <i slot="icon" class="toutiao toutiao-wode"></i> -->
        我的
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
