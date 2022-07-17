<template>
  <div>
    <div class="banner">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- 搜索框 -->
      <div class="van-search-container">
        <van-search
          class="van-search"
          v-model="searchValue"
          label="北京"
          placeholder="请输入小区或地址"
          @focus="focusFn"
        >
        </van-search>
        <van-icon name="map-marked" />
      </div>
    </div>
    <!-- 租房找房 -->
    <div class="house-container">
      <div class="house-box">
        <div class="house-box-inner">
          <div>
            <van-icon name="wap-home-o" />
          </div>
        </div>
        <p>整租</p>
      </div>
      <div class="house-box">
        <div class="house-box-inner">
          <div>
            <van-icon name="friends-o" />
          </div>
        </div>
        <p>合租</p>
      </div>
      <div class="house-box">
        <div class="house-box-inner">
          <div>
            <van-icon name="map-marked" />
          </div>
        </div>
        <p>地图找房</p>
      </div>
      <div class="house-box">
        <div class="house-box-inner">
          <div>
            <van-icon name="shop-collect-o" />
          </div>
        </div>
        <p>去出租</p>
      </div>
    </div>
    <!-- 租房小组-->
    <div class="renting-container">
      <p>租房小组<span>更多</span></p>
      <div class="renting-container-box">
        <div class="renting-container-box-inner">1</div>
        <div class="renting-container-box-inner">2</div>
        <div class="renting-container-box-inner">3</div>
        <div class="renting-container-box-inner">4</div>
      </div>
    </div>
  </div>
</template>
<script>
// import img1 from '@/assets/images/1.png'
// import img2 from '@/assets/images/2.png'
// import img3 from '@/assets/images/3.png'
import { banner } from '@/api/home'
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
      images: [],
      searchValue: ''
    }
  },
  methods: {
    async getBannerList() {
      const res = await banner()

      const { data } = res
      const { body } = data
      // console.dir(this.$http)
      // console.log(arr)
      // console.dir(request.defaults.baseURL)
      const baseURL = request.defaults.baseURL

      const arr = body.map((value) => {
        return value.imgSrc
      })
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace('/img', `${baseURL}/img`)
      }

      try {
        if (res.status === 200) {
          this.images = arr
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 点击搜索跳转
    focusFn() {
      this.$router.push('/city')
    }
  },
  mounted() {
    this.getBannerList()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped>
// 轮播图
.banner {
  height: 420px;
  .van-search-container {
    display: flex;
    position: relative;
    top: -370px;
    align-items: center;
    .van-search {
      z-index: 100;
      flex: 10;
      background-color: transparent;
      :deep(div) {
        background-color: white;
      }
    }
    .van-icon {
      flex: 1;
      color: white;
    }
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 420px;
    img {
      width: 100vw;
      height: 420px;
    }
  }
}
// 租房信息
.house-container {
  height: 270px;
  display: flex;

  .house-box {
    flex: 1;
    .house-box-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 170px;
      div {
        background-color: #f2fbf7;
        border-radius: 50%;
        height: 120px;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .van-icon {
        font-size: 74px;
        color: #2dbc81;
      }
    }
    p {
      height: 100px;
      margin: 0;
      padding: 0;
      font-size: 28px;
      text-align: center;
    }
  }
}
// 租房小组
.renting-container {
  background-color: #f6f5f6;
  height: 400px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  p {
    width: 100vw;
    color: #333;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    font-family: 'Microsoft YaHei';
    font-weight: bold;
    span {
      color: #787d82;
      position: relative;
      right: -500px;
      font-size: 26px;
      font-weight: normal;
    }
  }
  .renting-container-box {
    height: 280px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .renting-container-box-inner {
      margin-top: 20px;
      background-color: white;
      width: 47%;
      border-radius: 15px;
    }
  }
}
body {
  overflow: hidden;
}
</style>
