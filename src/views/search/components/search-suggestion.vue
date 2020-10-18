<template>
  <div class="search-suggestion-container">
    <van-cell icon="clock-o" title="火锅" value="约23849个结果"> </van-cell>
    <van-cell title="成都火锅排行榜" is-link class="ranking">
      <template #icon>
        <i class="iconfont icon-jingxuan"></i>
      </template>
    </van-cell>

    <van-cell
     icon="shop-o"
      class="shop"
      v-for="item in suggestionList"
      :key="item.id"
      >
      <span slot="title" v-html="handleSuggestion(item.name)"></span>
      <template #label>
        <div class="top">
          <div class="top-left">
            <van-rate
              v-model="item.rate"
              :size="13"
              void-icon="star"
              void-color="#eee"
              disabled
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
import { debounce } from 'lodash'
import { getSearchSuggestion } from '@/api/search'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchKeywords: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      rateValue: 5,
      suggestionList: []
    }
  },
  computed: {},
  watch: {
    searchKeywords: {
      // searchKeywords当这个发生变化,就会立即触发处理函数
      // 利用防抖优化
      handler: debounce(function (value) {
        this.loadSearchSuggestion(value)
      }, 1000),
      immediate: true // 该回调将会在侦听开始之后被立即调用
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 获取搜索建议的函数
    async loadSearchSuggestion (value) {
      console.log(value)
      try {
        // 1获取结果
        const { data } = await getSearchSuggestion(value)
        // 2处理结果
        this.suggestionList = data.data
      } catch (err) {
        console.log(err)
      }
    },

    // 处理搜索建议结果高亮
    handleSuggestion (data) {
      const reg = new RegExp(this.searchKeywords, 'g')
      const str = `<span style="color:yellow">${this.searchKeywords}</span>`
      return data.replace(reg, str)
    }
  }
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
