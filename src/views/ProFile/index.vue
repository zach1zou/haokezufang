<template>
  <div>
    <div>
      <div class="bgcontainer" v-if="isLogin">
        <!--背景图片 -->
        <div>
          <img :src="userList.imgSrc" alt="" />
        </div>
        <!--  人物信息  -->
        <div class="bgcontainer-box">
          <div class="border-box">
            <img :src="userList.ProfileimgSrc" alt="" />
            <p class="profileName">
              {{ userList.nickname }}
            </p>
            <button @click="logOut">退出</button>
            <p class="personFile">编辑个人资料 <van-icon name="arrow" /></p>
          </div>
        </div>
      </div>
      <div class="bgcontainer" v-else>
        <!--背景图片 -->
        <div>
          <img src="@/assets/images/bg.png" alt="" />
        </div>
        <!--  人物信息  -->
        <div class="bgcontainer-box">
          <div class="border-box">
            <img src="@/assets/images/bg.png" alt="" />
            <p class="profileName">游客</p>
            <button @click="loginIn">去登录</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 宫格 -->
    <div class="grid">
      <van-grid :column-num="3">
        <van-grid-item text="我的收藏" to="/favorate">
          <template #icon><van-icon name="star-o" /> </template>
        </van-grid-item>
        <van-grid-item text="我的出租">
          <template #icon><van-icon name="wap-home-o" /> </template>
        </van-grid-item>
        <van-grid-item text="看房记录">
          <template #icon><van-icon name="underway-o" /> </template>
        </van-grid-item>
        <van-grid-item text="成为房主">
          <template #icon> <van-icon name="ecard-pay" /> </template>
        </van-grid-item>
        <van-grid-item text="个人资料">
          <template #icon><van-icon name="manager-o" /> </template>
        </van-grid-item>
        <van-grid-item text="联系我们">
          <template #icon><van-icon name="service-o" /> </template>
        </van-grid-item>
      </van-grid>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { userApi, loginout } from '@/api/user'
import request from '@/utils/request'
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
      userList: { imgSrc: '', ProfileimgSrc: '', nickname: '游客' }
    }
  },
  methods: {
    async getUserToken() {
      try {
        const { data } = await userApi()
        // console.log(data.body, this.$store.state.user.token)
        this.userList.imgSrc = request.defaults.baseURL + data.body.avatar

        this.userList.nickname = data.body.nickname
        const ProfileimgSrc = data.body.avatar.replace(
          'avatar',
          'profile/avatar'
        )
        this.userList.ProfileimgSrc = request.defaults.baseURL + ProfileimgSrc
      } catch (error) {
        console.log(error)
      }
    },
    async logOut() {
      const res = await loginout()
      if (res.status === 200) {
        this.$store.commit('setUser', {})
        this.$router.push('/login')
      }
    },
    loginIn() {
      this.$router.push('/login')
    }
  },
  mounted() {
    this.getUserToken()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  watch: {}
}
</script>
<style lang="less" scoped>
.bgcontainer {
  position: absolute;
  width: 100vw;
  height: 760px;
  img {
    width: 100vw;
  }
  .bgcontainer-box {
    height: 400px;
    width: 80vw;
    background: white;
    position: relative;
    top: -400px;
    left: 10vw;
    box-shadow: 0 0 10px 3px #ddd;
    .border-box {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      top: -75px;
      position: relative;
      border-radius: 50%;
      .profileName {
        height: 100px;
        widows: 100px;
        color: black;
        font-size: 16px;
        line-height: 100px;
      }
      button {
        border-radius: 30px;
        color: #fff;
        padding: 2px 10px;
        background: #21b97a;
        font-size: 12px;
        width: 100px;
        border: none;
        position: relative;
        left: 20px;
      }
      .personFile {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
        display: flex;
        width: 200px;
      }
    }
  }
}
// 宫格
.grid {
  position: relative;
  top: 750px;
}
</style>
