<template>
  <div class="home-container">
    <!-- 搜索按钮 -->
    <div class="search">
      <van-search placeholder="请输入商户名和菜名" shape="round" show-action @click="goSearch">
        <img src="../../styles/image/矢量智能对象@2x.png" slot="action" />
      </van-search>
    </div>
    <!-- 搜索按钮 -->

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <!-- 分类 -->
    <div class="category">
      <ul>
        <li><img src="@/styles/image/美食@2x.png" /><span>美食</span></li>
        <li><img src="@/styles/image/电影@2x.png" /><span>电影</span></li>
        <li><img src="@/styles/image/休闲娱乐@2x.png" /><span>娱乐</span></li>
        <li><img src="@/styles/image/丽人@2x.png" /><span>美发</span></li>
      </ul>
      <ul>
        <li><img src="@/styles/image/闪惠团购@2x.png" /><span>医疗</span></li>
        <li><img src="@/styles/image/外卖@2x.png" /><span>外卖</span></li>
        <li><img src="@/styles/image/酒店@2x.png" /><span>酒店</span></li>
        <li><img src="@/styles/image/运动健身@2x.png" /><span>健身</span></li>
      </ul>
    </div>
    <!-- 分类 -->

    <!-- 活动 -->
    <div class="activity">
      <ul>
        <li><img src="@/styles/image/每日福利.png" /></li>
        <li><img src="@/styles/image/逛美食.png" /></li>
        <li><img src="@/styles/image/爱火锅.png" /></li>
        <li><img src="@/styles/image/霸王餐.png" /></li>
        <li><img src="@/styles/image/VIP特权.png" /></li>
      </ul>
    </div>
    <!-- 活动 -->

    <!-- 广告 -->
    <div class="advertisement">
      <img src="../../styles/image/图层9@2x.png" alt="" />
    </div>
    <!-- 广告 -->

    <!-- 标签页 -->
    <div class="tab">
      <van-tabs v-model="active" color="#ffcd00">
        <van-tab title="推荐" class="recommend">
          <img src="@/styles/image/日式.png" />
          <img src="@/styles/image/汉堡.png" />
          <img src="@/styles/image/汉堡.png" />
          <img src="@/styles/image/汉堡.png" />
        </van-tab>
        <van-tab title="附近"></van-tab>
        <van-tab title="达人"></van-tab>
        <van-tab title="菜谱"></van-tab>
        <van-tab title="视频"></van-tab>
      </van-tabs>
    </div>
    <!-- 标签页 -->
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入接口
import { getHomedata } from '@/api/home'
export default {
  data () {
    return {
      active: 0,
      uid: this.$route.query,
      isLoading: false
    }
  },
  methods: {
    goSearch () {
      // 跳转
      this.$router.push('/search')
    },
    // 下拉刷新
    async onRefresh () {
      console.log(111)
      // const data = await getHomedata()
      console.log(getHomedata)
      this.isLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 60px 0;
  // s搜索模块
  .search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .van-search__action {
      // width: 627px;
      img {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
      }
    }
  }

  // 分类模块
  .category {
    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        font-size: 16px;
        text-align: center;
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }

  // 活动模块
  .activity {
    > ul {
      margin: 20px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        img {
          width: 70px;
          height: 60px;
        }
      }
    }
  }

  // 广告
  .advertisement {
    height: 105px;
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  // tab
  .tab {
    .van-tabs__content {
      .recommend {
        // // width: 350px;
        // display: flex;
        // justify-content: center;
        > img {
          width: 170px;
          height: 200px;
          margin: 10px 8px;
          // text-align: center;
        }
      }
    }
  }
}
</style>
