<template>
  <div class="detail_container">
    <!-- 头部区域 -->
    <div class="detail_header">
      <div class="left">
        <i class="iconfont  icon-prev01"></i>
      </div>
      <div class="right">
        <i class="iconfont icon-icon--"></i>
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-tubiao-"></i>
      </div>
    </div>

    <!-- 店铺信息区域 -->
    <div class="detail_info">
      <div class="info_header">
        <div class="info_header_title">川西坝子(羊犀2.0直营店)</div>
        <img src="../../styles/image/矢量智能对象@2x.png" @click="goToComment"/>
      </div>
      <div class="info_comment">
        <span>
          <van-icon name="star" />
          <van-icon name="star" />
          <van-icon name="star" />
          <van-icon name="star" />
          <van-icon name="star" />
          <van-icon name="play" />
        </span>
        <span>9999条</span>
        <span>¥100/人</span>
      </div>
      <div class="info_mark">
        <span>口味:4.82</span>
        <span>口味:4.82</span>
        <span>口味:4.82</span>
        <span>口味:4.82</span>
        <span class="store_style">四川火锅</span>
      </div>
    </div>

    <!-- 图片导航区域 -->
    <div class="detail_nav">
      <div class="detail_nav_scroll">
        <img src="../../styles/image/图层4@2x.png" />
        <img src="../../styles/image/图层3@2x.png" />
        <img src="../../styles/image/图层4@2x.png" />
        <img src="../../styles/image/图层3@2x.png" />
      </div>
    </div>

    <!-- 店铺营业时间 -->
    <div class="detail_time">
      <van-cell icon="shop-o">
        <template #title>
          <div>
            <span class="detail_time_status">营业中</span> <span>｜</span> 11:00
            - 23:00
          </div>
        </template>
        <template #label>
          <van-tag color="#aaa" plain class="detail_time_tag">有包厢</van-tag>
          <van-tag color="#aaa" plain class="detail_time_tag">有露台</van-tag>
          <van-tag color="#aaa" plain class="detail_time_tag">有露天位</van-tag>
        </template>
        <template #right-icon>
          <van-icon name="arrow" class="detail_time_arrow" />
        </template>
      </van-cell>
    </div>

    <!-- 店铺地址 -->
    <div class="detail_adress">
      <van-cell border>
        <template #title>
          <div>
            <span class="detail_time_status"
              >蜀西路46号盛大国际2栋(羊西线三 环外侧)</span
            >
          </div>
        </template>
        <template #right-icon>
          <div class="detail_adress_img">
            <img src="../../styles/image/dianhua.png" alt="" />
          </div>
        </template>
        <template #label>
          <span>距您步行990m,需要11分钟</span>
        </template>
      </van-cell>
    </div>

    <!-- 服务 -->
    <div class="detail_serve">
      <div class="detail_serve_item">
        <img src="../../styles/image/yudingzuowei.png" class="detail_serve_item_img" alt="">
        <span>订座</span>
      </div>
      <div class="detail_serve_item">
        <img src="../../styles/image/waimai.png" class="detail_serve_item_img" alt="">
        <span>外卖</span>
      </div>
      <div class="detail_serve_item">
        <img src="../../styles/image/dache.png" class="detail_serve_item_img" alt="">
        <span>打车</span>
      </div>
    </div>

    <!-- 榜单 -->
    <div class="detail_top">
      <van-cell  title="羊西线美食热门榜第1名">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <van-icon name="arrow" class="detail_right_icom"/>
  </template>

  <template #title>
          <div>
            <span class="detail_top_title"
              >羊西线美食热门榜第1名</span
            >
          </div>
        </template>

  <template #icon>
    <div class="detail_left_icon">
      榜
    </div>
  </template>
</van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
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
    goToComment () {
      this.$router.push({ path: '/comment' })
    }
  }
}
</script>

<style lang="less" scoped>
.detail_container {
  background-color: #ffff;
  box-sizing: border-box;
}
.detail_header {
  box-sizing: border-box;
  height: 100px;
  background: url("../../styles/image/矩形3@2x.png");
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    display: block;
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 28px;
  }
  .icon-prev01,
  .icon-shoucang,
  .icon-tubiao-,
  .icon-icon-- {
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
  }
}

.detail_info {
  box-sizing: border-box;
  height: 77px;
  // background-color: orange;
  margin: 12px 0;
  padding: 0 23px;
  .info_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info_header_title {
      font-size: 22px;
    }
    img {
      width: 25px;
    }
  }
  .info_comment {
    margin: 5px 0;
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    span {
      margin-right: 13px;
      vertical-align: middle;
    }
    .van-icon-play {
      font-size: 14px;
    }
    .van-icon-star {
      font-size: 18px;
      color: orange;
    }
  }
  .info_mark {
    font-size: 12px;
    color: #888;
    span {
      margin-right: 3px;
    }
    .store_style {
      margin-left: 22px;
    }
  }
}

.detail_nav {
  height: 102px;
  padding: 0 0 0 23px;
  // background-color: teal;
  margin-bottom: 20px;
  .detail_nav_scroll {
    width: auto;
    overflow-x: auto;
    white-space: nowrap;
    img {
      overflow-x: auto;
      width: 135px;
      height: 100px;
      margin-right: 8px;
    }
  }
}

.detail_time {
  height: 54px;
  // background-color: thistle;
  margin: 20px 0;
  .detail_time_tag {
    padding: 2px 5px;
    margin-right: 5px;
  }
  .detail_time_arrow {
    margin-top: 15px;
    font-size: 18px;
    color: #666;
  }
}

.detail_time_status {
  font-size: 16px;
}

.detail_adress {
  height: 73px;
  .detail_adress_img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-left: 1px solid #ccc;
    width: 60px;
  }
  //background-color: violet;
}

.detail_serve {
  height: 50px;
  padding: 0 23px;
  margin-top: 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .detail_serve_item{
    display: flex;
    align-items: center;
    .detail_serve_item_img{
      width: 28px;
      margin-right: 7px;
    }
    span{
      font-size: 15px;
      vertical-align: middle;
      color: #343434;
    }
  }
}

.detail_top {
  height: 45px;
  margin: 10px 0;
  background-color: tan;
  .detail_right_icom{
    font-size: 16px;
    line-height: inherit;
  }
  .detail_left_icon{
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #fecb2f;
    color: #fff;
    text-align: center;
    margin-right: 4px;
    vertical-align: middle;
  }
  .detail_top_title{
    font-size: 16px;
  }
}
</style>
