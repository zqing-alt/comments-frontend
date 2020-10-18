<template>
  <div class="search-container">
    <!-- 顶部搜索 -->
    <!-- 输入框 -->
    <form action="/" slot="title" class="search-form">
      <van-search
        v-model.trim="searchKeywords"
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
    <van-tabs v-model="active" v-if="isSearchResultShow">
      <van-tab title="标签 1">
        <template #title>
          <img src="../../styles/image/quanbu-.png" class="tab-icons" />
          全部
        </template>
        <!-- 搜索结果 -->
        <search-result
         :searchKeywords="searchKeywords"
         :resultsList="resultsList"
         ></search-result>
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

    <!-- 搜索建议 -->
    <search-suggestion
      v-else-if="searchKeywords"
      :searchKeywords="searchKeywords"
    ></search-suggestion>

    <!-- 搜索历史及发现 -->
    <search-history
      v-else
      :historyList="historyList"
      :storeList="storeList"
      @search="onSearch"
      @discover="getStore"
    ></search-history>
  </div>
</template>

<script>
import SearchHistory from './components/search-history'
import SearchSuggestion from './components/search-suggestion'
import SearchResult from './components/search-result'

import { discoverStore, getSearchSuggestion } from '@/api/search'

export default {
  name: 'SearchIndex',
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResult
  },
  props: {},
  data () {
    return {
      searchKeywords: '',
      active: 0,
      isSearchResultShow: false,
      historyList: [], // 历史关键字
      storeList: [],
      resultsList: []
    }
  },
  computed: {},
  watch: {
    historyList: {
      handler (val) {
        localStorage.setItem('HISTORY', JSON.stringify(val))
      }
    }
  },
  created () {
    this.getHistoryList()
    this.getStore()
  },
  mounted () {},
  methods: {
    getHistoryList () {
      const list = localStorage.getItem('HISTORY')
      if (list) {
        try {
          this.historyList = JSON.parse(list)
        } catch (err) {
          this.historyList = []
        }
      }
    },

    async getStore () {
      try {
        const { data } = await discoverStore()
        this.storeList = data.data
      } catch (err) {

      }
    },

    onSearch (val) {
      console.log(val)
      this.searchKeywords = val
      this.addhistoryList(this.searchKeywords)
    },

    onCancel () {
      this.$router.back()
    },

    onFocus () {
      this.isSearchResultShow = false
    },

    async addhistoryList (val) {
      this.searchKeywords = val

      try {
        const { data } = await getSearchSuggestion(this.searchKeywords)
        this.resultsList = data.data
      } catch (err) {
        console.log(err)
      }

      this.historyList = [
        ...new Set([this.searchKeywords, ...this.historyList])
      ].slice(0, 10)

      this.isSearchResultShow = true
    }
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

  .search-form {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  /deep/ .van-tabs {
    // border-bottom: 1px solid #ccc;

    padding-top: 46px;
    .van-tabs__nav {
    }
    .van-tab {
      position: relative;
      .van-tab__text {
        color: #333;
        &::after {
          content: "";
          position: absolute;
          top: 12px;
          right: -3px;
          border-right: 2px solid #e0e0e0;
          height: 18px;
        }
      }
    }
    .van-tab--active .van-tab__text {
      font-size: 15px;
      color: #f5c620;
    }
    .van-tabs__line {
      width: 125px !important;
      height: 6px;
      background: linear-gradient(to right, #fc693c, #fecb2f);
      border-radius: 3px;
      bottom: 0px;
    }
  }
}
</style>
