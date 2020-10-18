<template>
  <div class="search-result-container">
    <div v-if="resultsList.length">
      <!-- 下拉菜单 -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option3" />
        <van-dropdown-item v-model="value2" :options="option4" />
      </van-dropdown-menu>
      <!-- 分类标签 -->
      <div class="tags-cate">
        <van-tag round>麻辣</van-tag>
        <van-tag round>美蛙</van-tag>
        <van-tag round>香辣小白兔</van-tag>
        <van-tag round>香辣</van-tag>
      </div>
      <!-- 店铺 -->
      <van-card
        v-for="(item, index) in resultsList"
        :key="index"
        :thumb="baseUrl + item.picture"
        @click="toDetail(item.id)"
      >
        <template #title>
          <div>
            <span class="title">{{ item.name }} </span>
            <span class="mai">卖</span>
          </div>
        </template>

        <template #desc>
          <div class="desc">
            <van-rate
              v-model="item.rate"
              :size="13"
              void-icon="star"
              void-color="#eee"
              disabled
            />
            <span class="count"> 128条</span>
            <span> ￥ {{ item.price }}/人</span>
          </div>
        </template>

        <template #tags>
          <div class="tags-info">
            <div class="address-cate">
              <span class="address">{{ item.address }} </span>
              <span> {{ item.category }}</span>
            </div>
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
    </div>

    <div v-else class="not-found">没有搜索到相关店铺哦</div>
  </div>
</template>

<script>
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
      baseUrl: 'http://192.168.32.45:80'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    toDetail (id) {
      this.$router.push(`/details?id=${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  padding: 20px 20px 10px;
}

.tags-cate {
  margin: 10px;
  // padding-bottom: 10px;
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
  border-bottom: 1px solid #eee;
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

.not-found {
  padding-top: 8px;
  text-align: center;
  font-size: 15px;
  color: #333;
}

.address {
  display: inline-block;
  overflow: hidden;
  width: 170px;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
</style>
