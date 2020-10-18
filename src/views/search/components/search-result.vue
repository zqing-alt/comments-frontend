<template>
  <div class="search-result-container">
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option3" />
      <van-dropdown-item v-model="value2" :options="option4" />
    </van-dropdown-menu>

    <!-- 分类标签 -->
    <div class="tags-cate">
      <van-tag round>标签</van-tag>
      <van-tag round>贪食之暴雨</van-tag>
      <van-tag round>香辣小白兔</van-tag>
      <van-tag round>香辣</van-tag>
    </div>

    <!-- <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
    > -->
      <!-- 店铺 -->
      <van-card
        v-for="(item, index) in resultsList" :key="index"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #title>
          <div>
            <span class="title">{{item.name}} </span>
            <span class="mai">卖</span>
          </div>
        </template>

        <template #desc>
          <div class="desc">
            <van-rate
              v-model="rateValue"
              :size="13"
              void-icon="star"
              void-color="#eee"
            />
            <span class="count"> 128条</span>
            <span> ￥ 58/人</span>
          </div>
        </template>

        <template #tags>
          <div class="tags-info">
            <span>九里堤火锅 </span>
            <span> 四川火锅</span>
            <span>5.8km</span>
          </div>
          <div class="tags-rate">
            <van-tag>95%认为口味很赞</van-tag>
            <van-tag>热门排行榜第10名</van-tag>
          </div>
        </template>

        <template #footer>
          <div class="footer">
            <p>您最近偷偷打探过这家哦</p>
            <p>
              <span class="juan">卷</span>
              <span> 39.9元 价值50元的代金券1张</span>
            </p>
            <p>
              <span class="tuan">团</span>
              <span> 89元 特惠双人餐,148元 爆款四人餐</span>
            </p>
          </div>
        </template>
      </van-card>
    <!-- </van-list> -->
  </div>
</template>

<script>
import { getSearchResult } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchKeywords: {
      type: String,
      required: true
    },
    resultsList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商区', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '全部分类', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '智能排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option4: [
        { text: '筛选', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      rateValue: 5
      // loading: false,
      // finished: false,
      // error: ''
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {},
  methods: {
    async onLoad () {
      console.log(1)
      try {
        // 1 获取搜索结果
        const { data } = await getSearchResult(this.searchKeywords)
        console.log(data)
        // this.list.push(...data.data.results)
        // console.log(data)
        // 2 加载状态结束
        this.loading = false

        // // 3 数据加载结束
        // if (data.data.results) {
        //   this.queryInfo.page++
        // } else {
        //   this.finished = true
        // }
      } catch (err) {
        this.error = true
        // 2 加载状态结束
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  padding: 20px 20px 10px;
}

.tags-cate {
  margin: 20px 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  .van-tag {
    padding: 8px 10px;
    margin-top: 5px;
    font-size: 13px;
    color: #333;
    margin: 5px;
  }
}

.van-tag--default {
  background-color: #f5f5f5;
}

.van-card {
  background-color: #fff;
  .van-card__title {
    font-size: 15px;
    color: #333;
  }
}

.van-card__thumb {
  width: 96px;
  height: 96px;
}

.desc {
  margin: 9px 0;
}
/deep/ .van-rate {
  .van-rate__icon--full {
    color: #fff;
    background-color: #f5c620;
  }
}

.tags-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tags-rate {
  margin-top: 9px;
  .van-tag {
    font-size: 10px;
    color: #ccc;
    background-color: #fff;
    border: 1px solid #eee;
    margin: 0 2px;
  }
}

.van-card__footer {
  text-align: left;
}
.footer {
  box-sizing: border-box;
  padding-left: 96px;
  /deep/ .van-card__footer {
    text-align: left;
  }
}
.footer {
  font-size: 13px;
  color: #868686;
  p {
    margin: 8px;
  }
}
.juan,
.tuan,
.mai {
  display: inline-block;
  background-color: #ff4522;
  color: #fff;
  padding: 0 3px;
}
.mai,
.tuan {
  background-color: #f5c620;
}
</style>
