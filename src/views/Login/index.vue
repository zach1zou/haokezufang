<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
    <div style="height: 20px"></div>
    <!-- form表单 -->
    <van-form @submit="onSubmit" class="form-horizontal">
      <van-field
        v-model="user.username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="height: 20px"></div>

      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="submitBtn"
          >登 录</van-button
        >
      </div>
    </van-form>
    <router-link to="/registe" class="register"
      >还没有注册账号,去注册~</router-link
    >
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  props: {
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async onSubmit() {
      const res = await login(this.user)
      //   console.log(res)
      try {
        this.$toast.success('登录成功')

        this.$router.push('/home/profile')
      } catch (error) {
        if (res.status === 400) {
          this.$toast.fail('传入的参数缺失')
        } else if (res.status === 401) {
          this.$toast.fail('用户的账号密码错误')
        } else if (res.status === 401) {
          this.$toast.fail('接口不存在')
        } else {
          this.$toast.fail('找不到页面')
        }
      }
    }
  },
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped>
.nav-bar {
  background-color: #21b97a;

  :deep(.van-nav-bar__title) {
    color: white;
    font-size: large;
  }
  :deep(.van-icon) {
    color: white;
  }
}

.form-horizontal {
  .van-cell {
    height: 120px;
    line-height: 120px;
  }
  .submitBtn {
    background-color: #21b97a;
    border: none;
    height: 100px;
    font-size: 36px;
  }
}
.register {
  color: #666;
  width: 100vw;
  text-align: center;
  display: block;
  font-size: 28px;
  margin-top: 80px;
}
</style>
