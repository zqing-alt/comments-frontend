<template>
  <div class="comment_container">
    <!-- 标题 -->
    <van-nav-bar
      title="店铺评价"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="cross" color="#000" size="0.6rem" />
      </template>
      <template #right>
        <div class="right_content">
          <img src="../../styles/image/wenzhang.png" class="wenzhang_img" />
          <van-button round type="info" size="mini" color="#fecc2f">
            发表
          </van-button>
        </div>
      </template>
    </van-nav-bar>
    <!-- 评分 -->
    <div class="comment">
      <span class="comment_total">总体</span>
      <van-rate
        v-model="total"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
        :size="30"
      />
      <div class="describe_comment">
        {{ totalScore }}
      </div>
    </div>
    <!-- 开始隐藏的星星 -->
    <div v-if="total">
      <div class="comment">
        <span class="comment_total">口味</span>
        <van-rate
          v-model="taste"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
          :size="30"
        />
        <div class="describe_comment">
          {{ tasteScore }}
        </div>
      </div>

      <div class="comment">
        <span class="comment_total">环境</span>
        <van-rate
          v-model="environment"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
          :size="30"
        />
        <div class="describe_comment">
          {{ environmentScore }}
        </div>
      </div>
      <div class="comment">
        <span class="comment_total">服务</span>
        <van-rate
          v-model="service"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
          :size="30"
        />
        <div class="describe_comment">
          {{ serviceScore }}
        </div>
      </div>
      <div class="comment">
        <span class="comment_total">食材</span>
        <van-rate
          v-model="food"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
          :size="30"
        />
        <div class="describe_comment">
          {{ foodScore }}
        </div>
      </div>
    </div>

    <!-- 评论区域 -->
    <div>
      <van-field
        v-model="describes"
        rows="5"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="可分享口味，环境，服务，食材等方面的体验 还可以用菜品标签评价菜品哦！"
      />
      <div class="comment_tips">写15个字，有机会被采纳为精选点评</div>
      <van-button icon="plus" plain round size="small" @click="addTitle">
        标题
      </van-button>
      <van-button icon="plus" plain round size="small" @click="addTopic">
        话题
      </van-button>
    </div>
    <!-- 上传图片视频区域 -->
    <!-- <input type="file" hidden ref="inputFile" @change="inputChange"> -->
    <div class="upload_container">
      <div class="upload_img" @click="addpicShow = true">
        <img src="../../styles/image/zhaopian.png" />
        <span>上传图片</span>
      </div>
      <div class="upload_vedio">
        <img src="../../styles/image/shipin.png" />
        <span>上传视频</span>
      </div>
      <div class="upload_text">
        100字+3张图或15秒视频有机会<span class="heght_text">赢100积分</span>
      </div>
    </div>

    <!-- <van-button type="primary" @click="addpicShow= true">测试按钮</van-button> -->
    <!-- 上传图片的弹出层 -->
    <van-popup
      v-model="addpicShow"
      round
      position="bottom"
      :style="{ height: '50%' }"
      class="pic_show_pop"
      closeable
      v-if="addpicShow"
    >
      <van-uploader v-model="fileList" multiple :max-count="1" />
      <van-button type="primary" size="large" round @click="uploadPicture"
        >上传照片</van-button
      >
    </van-popup>

    <!--  添加一个弹出层用来装话题和标题 -->
    <van-popup
      v-model="addTitleShow"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-picker
        title="选择标题"
        show-toolbar
        :columns="titleColumns"
        @confirm="onChooseTitleConfirm"
        @cancel="onChooseTitleCancel"
      />
    </van-popup>

    <!-- 添加话题 -->
    <van-popup
      v-model="addTopicShow"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-picker
        title="选择标题"
        show-toolbar
        :columns="topicColumns"
        @confirm="onChooseTopicConfirm"
        @cancel="onChooseTopicCancel"
      />
    </van-popup>
    <!--
      <div class="uploadd_img">
        <van-image
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <van-image
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <van-image
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      </div> -->

    <van-cell-group class="recommend_vegetables">
      <van-cell title="推荐菜" value="全部推荐菜" is-link> </van-cell>
    </van-cell-group>
    <div class="recommend_vegetables_tag">
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >老八</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >汉堡</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >鸡腿</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >榴莲</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >鸡排</van-tag
      >
    </div>

    <div class="recommend_vegetables_tag">
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >龙虾</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >生蚝</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >鲍鱼</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >闸蟹</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >鱼翅</van-tag
      >
    </div>

    <div class="recommend_vegetables_tag">
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >香蕉</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >花生</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >牛奶</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >鸡蛋</van-tag
      >
      <van-tag round color="#f3f3f3" text-color="#000" size="large"
        >鸭蛋</van-tag
      >
    </div>
  </div>
</template>

<script>
import { postComment, postUploadImg } from '@/api/comment.js'
// import { updateUserAvatar } from '@/api/uploadimg.js'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      // 总体评分
      total: 0,
      // 口味
      taste: 5,
      // 环境
      environment: 5,
      // 服务
      service: 5,
      // 食材
      food: 5,
      // 描述
      describes: '',
      // 话题
      topic: '#成都美食推荐#',
      // 标题
      title: '#外卖小哥辛苦了#',
      // 图片
      picture: '',
      // 店铺id
      storeId: null,
      averageScore: 0,
      userID: sessionStorage.getItem('USER_ID'),
      // 添加标题的弹出层
      addTitleShow: false,
      // 添加话题
      addTopicShow: false,
      // 添加图片功能
      addpicShow: false,
      // 选择标题的数据
      topicColumns: [
        '#风犬少年的天空#',
        '#熬夜猝死急救方法#',
        '#Doinb复盘#',
        '#小米80W无线秒充#',
        '#TES队内语音#',
        '#G2晋级四强#',
        '#佟丽娅被儿子嫌弃太瘦了#',
        '#罗志祥方拒绝综艺主持邀约#'
      ],
      titleColumns: [
        '#美食#',
        '#烧烤#',
        '#火锅#',
        '#小吃#',
        '#海鲜#',
        '#生鲜#'
      ],
      // uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      // 上传文件的数组  数组中的对象就是图片的信息
      fileList: []
    }
  },
  // todo星星联动
  computed: {
    totalScore () {
      if (this.total === 5) {
        return '极力推荐'
      } else if (this.total === 4) {
        return '超赞'
      } else if (this.total === 3) {
        return '满意'
      } else if (this.total === 2) {
        return '一般'
      } else if (this.total === 1) {
        return '很差'
      }
      return '评分领赏金哦！'
    },
    tasteScore () {
      if (this.taste === 5) {
        return '极力推荐'
      } else if (this.taste === 4) {
        return '超赞'
      } else if (this.taste === 3) {
        return '满意'
      } else if (this.taste === 2) {
        return '一般'
      } else if (this.taste === 1) {
        return '很差'
      }
      return '评分领赏金哦！'
    },
    environmentScore () {
      if (this.environment === 5) {
        return '极力推荐'
      } else if (this.environment === 4) {
        return '超赞'
      } else if (this.environment === 3) {
        return '满意'
      } else if (this.environment === 2) {
        return '一般'
      } else if (this.environment === 1) {
        return '很差'
      }
      return '评分领赏金哦！'
    },
    serviceScore () {
      if (this.service === 5) {
        return '极力推荐'
      } else if (this.service === 4) {
        return '超赞'
      } else if (this.service === 3) {
        return '满意'
      } else if (this.service === 2) {
        return '一般'
      } else if (this.service === 1) {
        return '很差'
      }
      return '评分领赏金哦！'
    },
    foodScore () {
      if (this.food === 5) {
        return '极力推荐'
      } else if (this.food === 4) {
        return '超赞'
      } else if (this.food === 3) {
        return '满意'
      } else if (this.food === 2) {
        return '一般'
      } else if (this.food === 1) {
        return '很差'
      }
      return '评分领赏金哦！'
    }
    /* averageScore () {
      return parseInt((Math.floor(this.taste + this.environment + this.service + this.food)) / 4)
    } */
  },
  watch: {
    taste () {
      this.total = parseInt(
        Math.floor(this.taste + this.environment + this.service + this.food) / 4
      )
    },
    environment () {
      this.total = parseInt(
        Math.floor(this.taste + this.environment + this.service + this.food) / 4
      )
    },
    service () {
      this.total = parseInt(
        Math.floor(this.taste + this.environment + this.service + this.food) / 4
      )
    },
    food () {
      this.total = parseInt(
        Math.floor(this.taste + this.environment + this.service + this.food) / 4
      )
    }
  },
  created () {
    this.storeId = this.$route.query.id
  },
  mounted () {},
  methods: {
    // 返回上一页
    onClickLeft () {
      this.$router.push('/details?id=' + this.storeId)
    },

    // 提交表单到后台
    async onClickRight () {
      this.$toast.loading({
        message: '提交中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
      try {
        const { data } = await postComment(this.userID, this.storeId, {
          total: this.total - 0,
          taste: this.taste - 0,
          environment: this.environment - 0,
          service: this.service - 0,
          food: this.food - 0,
          describes: this.describes,
          topic: this.topic,
          title: this.title
        })
        console.log(data)
        this.$toast('发表成功')
        // 跳转页面
        this.$router.push('/details?id=' + this.storeId)
      } catch (err) {
        console.log(err)
        this.$toast('更新失败')
      }
    },

    // todo 上传图片 需要后台提供接口
    /* async inputChange () {
      // 获取文件对象
      const file = this.$refs.inputFile.files[0]
      console.log(file)
      // 获取blob数据
      // const imgUrl = window.URL.createObjectURL(file)
      // console.log(imgUrl)
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
      try {
        const formData = new FormData()
        formData.append('photo', file)
        console.log(formData)
        const { data } = await postUploadImg(formData)
        // const { data } = await postUploadImg()
        // 关闭弹层，更新视图
        console.log(data)
        this.$toast('更新成功')
      } catch (err) {
        console.log(err)
        this.$toast('更新失败')
      }
    }, */

    // 更新后的上传图片功能
    async uploadPicture () {
      const file = this.fileList[0].file
      console.log(file)
      this.$toast.loading({
        message: '上传中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
      try {
        const formData = new FormData()
        formData.append('photo', file)
        console.log(formData)
        const { data } = await postUploadImg(formData)
        // const { data } = await postUploadImg()
        // 关闭弹层，更新视图
        console.log(data)
        this.$toast('上传成功')
        this.addpicShow = false
      } catch (err) {
        console.log(err)
        this.$toast('上传失败')
        this.addpicShow = false
      }
    },

    // 添加标题
    addTitle () {
      // this.describes += '#外卖小哥辛苦了#'
      this.addTitleShow = true
    },

    onChooseTitleConfirm (value) {
      this.describes += value
      this.addTitleShow = false
    },

    onChooseTitleCancel () {
      this.addTitleShow = false
    },

    // 添加话题
    addTopic () {
      // this.describes += '#成都美食推荐#'
      this.addTopicShow = true
    },
    onChooseTopicConfirm (value) {
      this.describes += value
      this.addTopicShow = false
    },

    onChooseTopicCancel () {
      this.addTopicShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.comment_container {
  padding: 20px;
}
.wenzhang_img {
  width: 0.4125rem;
  height: 0.4875rem;
  margin-right: 0.25rem;
}

.van-button--mini {
  padding: 0 0.375rem;
}

.van-cell {
  padding: 0;
  margin-top: 14px;
}

.right_content {
  display: flex;
  justify-content: center;
  align-items: center;
}

/deep/.van-nav-bar__title {
  margin: 0 0.25rem 0 1.4rem;
}

/deep/.van-nav-bar__left {
  padding: 0;
}

.comment {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.describe_comment {
  flex: 1;
  font-size: 12px;
  color: #666;
  text-align: end;
}

.comment_total {
  font-size: 18px;
  margin: 0 15px 0 0;
}

.van-field__control {
  font-size: 12px;
  color: #cbcbcb;
}

.comment_tips {
  text-align: end;
  font-size: 12px;
  color: #cbcbcb;
}

.van-button--small {
  padding: 0 13px;
  margin-right: 16px;
  font-size: 12px;
  color: #000;
}

.van-button__icon {
  color: orange;
}

.upload_container {
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload_img,
.upload_vedio {
  border-radius: 4px;
  margin-right: 10px;
  width: 90px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  img {
    width: 24px;
    height: 20px;
    margin-bottom: -30px;
  }
  span {
    font-size: 12px;
    color: #cbcbcb;
  }
}

.upload_text {
  font-size: 12px;
  color: #d8d8d8;
}

.heght_text {
  color: orange;
}

.recommend_vegetables {
  margin-top: 20px;
}

.recommend_vegetables_tag {
  margin-top: 15px;
}

.van-cell__title {
  span {
    font-size: 18px;
  }
}

.van-tag {
  font-size: 14px;
  margin-right: 14px;
  padding: 6px 12px;
}

/* .uploadd_img{
  height: 90px;
  // background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-image{
    width: 33%;
  }
} */

.pic_show_pop {
  box-sizing: border-box;
  padding: 50px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
