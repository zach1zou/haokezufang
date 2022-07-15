<template>
  <div>
    <div class="bgcontainer">
      <!--背景图片 -->
      <img :src="imgSrc" alt="" />
      <!--  人物信息  -->
      <div class="bgcontainer-box">
        <div class="border-box">
          <img :src="ProfileimgSrc" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { userApi } from '@/api/user'
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
      imgSrc: '',
      ProfileimgSrc: ''
    }
  },
  methods: {
    async getUserToken() {
      // console.log(this.$store.state.user)
      const res = await userApi()
      // console.log(res.data.body)
      // console.log(res.data.body.nickname)
      this.imgSrc = `${request.defaults.baseURL}${res.data.body.avatar}`
      let ProfileimgSrc = res.data.body.avatar
      ProfileimgSrc = ProfileimgSrc.replace('img', 'img/profile')
      this.ProfileimgSrc = `${request.defaults.baseURL}${ProfileimgSrc}`
    }
  },
  mounted() {
    this.getUserToken()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
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
      background: red;
      margin: 0 auto;
      top: -75px;
      position: relative;
      border-radius: 50%;
    }
  }
}
</style>
