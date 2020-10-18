<template>
  <div>
    <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>

    <!-- 底部标签栏 -->
    <van-tabbar route class="layout-container-bar" :active-color="'#ffcd01'">
      <van-tabbar-item to="/">
        <img src="@/styles/image/yemian-copy-copy.png">
        <span>首页</span>

      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <!-- <i slot="icon" class="toutiao toutiao-wenda"></i> -->
        <img src="@/styles/image/raider.png">
        <span>攻略</span>

      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <!-- <i slot="icon" class="toutiao toutiao-shipin"></i> -->
        <!-- <img src="@/styles/image/yemian-copy-copy.png">
        <span>+</span> -->
        <div class="add">
          <van-icon name="plus" />
        </div>

      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <!-- <i slot="icon" class="toutiao toutiao-shipin"></i> -->
        <img src="@/styles/image/guanzhu.png">
        <span>关注</span>

      </van-tabbar-item>
      <van-tabbar-item to="/login">
        <!-- <i slot="icon" class="toutiao toutiao-wode"></i> -->
        <img src="@/styles/image/wode.png">
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
  methods: {

  }
}
</script>

<style lang="less" scoped>
.layout-container{
  .layout-container-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
  }
  /deep/.van-tabbar-item__text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // tabbar图标
    img{
     width: 25px;
     height: 25px;
     margin-bottom: 6px;
    }
    // 添加按钮
    .add{
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background-color: #fe812f;
      display: flex;
      justify-content: center;
      align-items: center;
      .van-icon{
        font-size: 40px;
        color: white;
      }
    }
  }
}

</style>
