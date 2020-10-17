<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar
      title="川西坝子(羊犀2.0直营店)"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    <template #left>
    <van-icon name="cross" color="#000" size="0.6rem" />
  </template>
    <template #right>
      <div class="right_content">
        <img src="../../styles/image/wenzhang.png"  class="wenzhang_img">
        <van-button round type="info" size="mini" color="#fecc2f"> 发表 </van-button>
      </div>
    </template>
    </van-nav-bar>
    <!-- 标题 -->

    <!-- 评分 -->
    <span>总体</span>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onClickLeft () {

    },
    onClickRight () {

    }
  }
}
</script>

<style lang="less" scoped>
  .wenzhang_img{
    width: 0.4125rem;
    height: 0.4875rem;
    margin-right: 0.25rem;
  }

  .van-button--mini{
    padding: 0 0.375rem;
  }

  .right_content{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /deep/.van-nav-bar__title{
    margin:0 0.25rem 0 1.4rem
  }
</style>
