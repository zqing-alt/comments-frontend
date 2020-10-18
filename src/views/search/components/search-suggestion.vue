<template>
  <div class="search-suggestion-container">
    <van-cell icon="clock-o" title="火锅" value="约23849个结果"> </van-cell>
    <van-cell title="成都火锅排行榜" is-link class="ranking">
      <template #icon>
        <i class="iconfont icon-jingxuan"></i>
      </template>
    </van-cell>
    <van-cell icon="shop-o" title="川西坝子火锅" class="shop">
      <template #label>
        <div class="top">
          <div class="top-left">
            <van-rate
              v-model="rateValue"
              :size="13"
              void-icon="star"
              void-color="#eee"
            />
            <div class="count">128条</div>
          </div>
          <div class="count">新店</div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <span class="cates">四川火锅</span>
            <span> | </span>
            <span>中海国际大酒店</span>
          </div>
          <span>900m</span>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {},
  data () {
    return {
      rateValue: 5
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.search-suggestion-container {
  padding: 45px 20px 0;
}
.van-cell {
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 15px;
}
/deep/ .van-rate {
  .van-rate__icon--full {
    color: #fff;
    background-color: #f5c620;
  }
}

.icon-jingxuan {
  margin-right: 5px;
}

.top {
  display: flex;
  justify-content: space-between;
  // border-bottom: 1px solid #eee;
  .top-left {
    display: flex;
    justify-content: space-between;
    .count {
      margin-left: 5px;
    }
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bottom-left {
    .cates {
      margin-right: 5px;
      // border-right: 1px solid #eee;
    }
  }
}

.shop {
  position: relative;
  padding-bottom: 0px;
  &::before {
    position: absolute;
    bottom: 18px;
    left: 0;
    width: 100%;
    content: "";
    border-bottom: 1px solid #eee;
  }
}
</style>
