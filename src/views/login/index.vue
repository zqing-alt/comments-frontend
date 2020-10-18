<template>
  <div class="login-container">
    <p><van-icon name="cross" /></p>
    <p>手机号登录/注册</p>

    <!-- fom表单 -->
    <van-form>
      <!-- 手机号 -->
      <van-field
        class="phoneNum"
        v-model="phoneNum"
        placeholder="请输入手机号"
      >
      <van-icon slot="left-icon" name="arrow-down" />
      <label slot="label">中国+86</label>
      </van-field>
      <!-- 代码 -->
      <van-field class="phoneNum" v-show="phoneNum.trim().length>=11">

      </van-field>
      <p class="login-question">登录遇到问题</p>
      <div>
        <van-button v-if="flag" type="primary" size="large" round color="#ffce00" @click="getCode">获取短信验证码</van-button>
        <van-button v-else type="primary" size="large" round color="#ffce00">登录</van-button>
      </div>
      <p class="register-tip">未注册的手机号验证后自动注册</p>
    </van-form>
    <!-- fom表单 -->

    <!-- 第三方 -->
      <div class="third-party">
        <van-divider>第三方账号登录</van-divider>
        <div class="tengxun">
          <div><img src="@/styles/image/weixin-2.png"></div>
          <div><img src="@/styles/image/qq.png"></div>
        </div>
      </div>
    <!-- 第三方 -->

    <div class="footer">
      <p>登录即代表同意<span>《用户服务协议》与《隐私政策》</span>等，<strong>接受免除
      或限制责任，肃宗管辖约定</strong>等粗体或下划线标示条款。</p>
    </div>
  </div>
</template>

<script>
// 导入接口
import { getLoginCode } from '@/api/user'

export default {
  data () {
    return {
      flag: true,
      phoneNum: '18895661245',
      codeValue: '000000'
    }
  },
  created () {},
  methods: {
    getCode () {
      console.log(111)
      try {
        const data = getLoginCode()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login-container {
  background-color: #ffffff;
  padding: 19px;

  // form
  .van-form{
    .phoneNum{
      border-bottom: 1px solid #ccc;
    }
    .login-question{
      font-size: 13px;
      color: #ccc;
      text-align: right;
    }
    .register-tip{
      font-size: 12px;
      color: #ccc;
      text-align: center;
    }
  }

  // 第三方
  .third-party{
    margin-top: 70px;
    .tengxun{
      display: flex;
      justify-content:space-evenly;
      >div{
        margin-top: 30px;
        width: 80px;
        height: 80px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  // footer
  .footer{
    margin-top: 40px;
    font-size: 12px;
    p{
      text-align: center;
      span{
        color: #ed7b3b;
      }
      strong{
        font-weight: 500;
        text-decoration: underline;
      }
    }
  }
}
</style>
