<template>
  <div class="search-container">
    <!-- 顶部搜索 -->
    <!-- 输入框 -->
    <form action="/" slot="title" class="search-form">
      <van-search
        v-model="searchKeywords"
        show-action
        placeholder="输入商户名或菜名"
        clearable
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
        @focus="onFocus"
      />
    </form>

    <!-- 标签页 -->
    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <template #title>
          <img src="../../styles/image/quanbu-.png" class="tab-icons" />
          全部
        </template>
      </van-tab>
      <van-tab title="标签 2">
        <template #title>
          <img src="../../styles/image/weibiaoti-.png" class="tab-icons" />点评
        </template>
      </van-tab>
      <van-tab title="标签 3">
        <template #title>
          <img src="../../styles/image/daren.png" class="tab-icons" />达人
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      searchKeywords: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch () {},

    onCancel () {
      this.$router.back()
    },

    onFocus () {}
  }
}
</script>

<style lang="less" scoped>
.search-container {
  .van-search {
    .van-search__content--round {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
    }
    .van-search__content--round {
      background-color: #fff;
    }
  }
  .tab-icons {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 5px;
  }

  /deep/ .van-tabs {
    border-bottom: 1px solid #ccc;
    .van-tabs__nav {
      padding: 0;
      height: 40px;
      position: fixed;
      left: 0;
      right: 0;
      // top: 92px;
      z-index: 1;
    }
    .van-tab__text {
      color: #333;
    }
    .van-tab--active .van-tab__text {
      font-size: 15px;
      color: #f5c620;
    }
    .van-tabs__line {
      width: 31px !important;
      height: 6px;
      background: rgba(50, 150, 250, 1);
      border-radius: 3px;
      bottom: 0px;
    }
  }
}
</style>
