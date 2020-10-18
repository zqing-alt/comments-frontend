<template>
     <div class="history-discover-container">
      <div class="history">
        <div class="title">最近搜索</div>
        <div class="tags">
          <van-tag
          round
          v-for="(item,index) in historyList"
          :key="index"
          @click="search(item)"
          >{{item}}</van-tag>
        </div>
      </div>
      <div class="discover">
        <div class="title discover-title">
          <span>搜索发现</span>
          <span class="change" @click="discover">换一组</span>
        </div>
        <div class="tags">
          <van-tag
          round
          v-for="(item) in storeList"
          :key="item.id"
          @click="search(item.name)"
          >{{item.name}}</van-tag>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'SearchHistory',
  components: {},
  props: {
    historyList: {
      type: Array,
      default: () => []
    },
    storeList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      discoverList: []
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
    search (keywords) {
      this.$emit('search', keywords)
    },

    discover () {
      this.$emit('discover')
    }
  }
}
</script>

<style lang="less" scoped>
.history-discover-container {
    padding:60px 20px 0;
    .history,
    .discover {
      margin-bottom: 20px;
      .title {
        font-size: 13px;
        color: #777;
        .change {
          color: #f5c620;
        }
      }

      .van-tag {
        padding: 6px 10px;
        margin-top: 5px;
        font-size: 13px;
        color: #333;
        margin: 5px;
      }
      .van-tag--default {
        background-color: #f5f5f5;
      }
    }

    .discover-title {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
