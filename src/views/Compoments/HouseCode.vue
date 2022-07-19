<template>
  <div>
    <NavBar></NavBar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img :src="HouseInfo.houseImg" alt="" /></van-swipe-item>
    </van-swipe>
    <!-- 房屋细节 -->
    <div class="houseDetails">
      <div class="houseDetails-container">
        <h3>{{ HouseInfo.title }}</h3>
        <p>
          <span v-for="item in HouseInfo.tags" :key="item">{{ item }} </span>
        </p>
      </div>
      <div class="houseDetails-container">
        <van-grid :column-num="3" :border="flag">
          <van-grid-item
            :text="`${HouseInfo.price}/月`"
            class="houseDetails-container-color"
          />
          <van-grid-item
            :text="HouseInfo.roomType"
            class="houseDetails-container-color"
          />
          <van-grid-item
            :text="`${HouseInfo.size} `"
            class="houseDetails-container-color"
          />
          <van-grid-item text="租金" />
          <van-grid-item text="房型" />
          <van-grid-item text="面积" />
        </van-grid>
      </div>
      <div class="houseDetails-container">
        <div>
          装修:<span>{{ HouseInfo.description }}</span>
        </div>
        <div>
          朝向:<span v-for="item in HouseInfo.oriented" :key="item">{{
            item
          }}</span>
        </div>
        <div>
          楼层:<span>{{ HouseInfo.floor }}</span>
        </div>
        <div>
          类型:<span>{{ HouseInfo.roomType }}</span>
        </div>
      </div>
    </div>
    <!-- 小区 -->
    <!-- 房屋配套 -->
    <div class="houseSupport">
      <van-cell title="房屋配套" size="large" />

      <van-grid :column-num="5" :border="flag">
        <van-grid-item
          v-for="(item, index) in HouseInfo.supporting"
          :key="index"
          icon="home-o"
        >
          <template #text> {{ item }}</template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 房源概况 -->
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { HouseCodeApi } from '@/api/house'
import NavBar from '@/views/Compoments/NavBar.vue'
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
  components: {
    NavBar
  },
  data() {
    return {
      HouseInfo: {},
      flag: false
    }
  },
  methods: {
    async getHouseInfo() {
      const id = this.$router.history.current.params.username
      const { data } = await HouseCodeApi(id)
      // console.log(data.body)
      this.HouseInfo = data.body

      this.HouseInfo.houseImg = request.defaults.baseURL + data.body.houseImg

      console.log(this.HouseInfo)
    }
  },
  mounted() {
    this.getHouseInfo()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 500px;
  text-align: center;

  height: 500px;
}
// 房屋细节
.houseDetails {
  padding: 30px;
  height: 520px;
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
  .houseDetails-container {
    flex: 1;
    border-bottom: 1px solid #cecece;
    padding-bottom: 25px;
    &:first-child {
      background-color: white;
      flex-direction: column;
      display: flex;

      h3 {
        flex: 4;
        font-size: 32px;
        line-height: 4;
      }
      p {
        flex: 1;
        span {
          color: #39becd;
          background: #e1f5f8;
          font-size: 24px;
          border-radius: 6px;
          padding: 10px;
          margin-right: 5px;
          line-height: 1;
        }
      }
    }
    &:last-child {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 15px;
      div {
        width: 50%;
        height: 52px;
        color: #999;
        font-size: 26px;
        span {
          color: black;
        }
      }
    }
    .houseDetails-container-color {
      /deep/ .van-grid-item__text {
        color: #fa5741;
        font-weight: bolder;
        font-size: 38px;
      }
    }
  }
}
//房屋配套
.houseSupport {
  .van-cell__title {
    font-weight: bolder;
    border-bottom: #cecece solid 1px;
    height: 80px;
  }
  .van-grid-item__content--center {
    font-size: 19px;
  }
}
</style>
