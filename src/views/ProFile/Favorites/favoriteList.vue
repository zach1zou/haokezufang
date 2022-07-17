<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="收藏列表"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />

    <!-- 收藏列表 -->
    <div class="favlist" v-for="(item, index) in FavoriteList" :key="index">
      <div class="favlistImg">
        <img :src="item.houseImg" alt="" />
      </div>
      <div class="favlist-content">
        <h3>{{ item.title }}</h3>
        <span class="favlistInfo">{{ item.desc }}</span>
        <span
          class="transInfo"
          v-for="(itemtags, indextags) in item.tags"
          :key="indextags"
        >
          {{ itemtags[indextags] }}</span
        >
        <p class="moneyInfo">
          <span>{{ item.price }}</span
          >元/月
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
import { favoriteListApi } from '@/api/user'
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
      FavoriteList: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async getFavoriteList() {
      try {
        const { data } = await favoriteListApi()
        this.FavoriteList = data.body
        console.log(data.body)
        data.body.forEach((val) => {
          val.houseImg = request.defaults.baseURL + val.houseImg
        })

        // console.log(this.FavoriteList, data.body.houseImg)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getFavoriteList()
  },
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped>
/deep/.van-nav-bar__content {
  background: #21b97a;

  .van-nav-bar__title {
    text-align: center;
    color: white;
    font-size: 44px;
  }
  .van-icon-arrow-left {
    color: white;
  }
}
// 收藏列表
.favlist {
  display: flex;
  height: 300px;
  align-items: center;
  .favlistImg {
    width: 212px;
    height: 160px;
  }
  .favlist-content {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 40px;
      padding-bottom: 10px;
    }
    .favlistInfo {
      font-size: 12px;
      color: #afb2b3;
      padding-bottom: 10px;
    }
    .transInfo {
      color: #39becd;
      background: #e1f5f8;
      font-size: 14px;
      line-height: 50px;
      text-align: center;
      height: 50px;
      width: 100px;
      border-radius: 5px;
    }
    .moneyInfo {
      color: #fa5741;
      font-size: 36px;
      span {
        font-weight: bolder;
        padding-right: 10px;
      }
    }
  }
}
</style>
