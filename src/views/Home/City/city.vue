<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
    <!-- 索引栏 -->
    <van-index-bar :index-list="indexList" highlight-color>
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell title="北京" />

      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotCityList"
        :key="index"
        @click="Togo(index)"
      />
      <!-- 城市列表数据 -->
      <div v-for="(CityListVal, CityListKey) in cityList" :key="CityListKey">
        <van-index-anchor :index="CityListKey"
          >{{ CityListKey }}
        </van-index-anchor>
        <div v-for="cityListval in CityListVal" :key="cityListval.label">
          <van-cell
            :title="cityListval.label"
            @click="TogoHome(cityListval.label)"
          />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import { cityApi, hotCityApi } from '@/api/area'
import { pinyin } from 'pinyin-pro'

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
      indexList: ['#', '热'],
      CityIndex: [],
      hotCityList: [],
      cityList: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async getCityList() {
      const { data } = await cityApi()
      console.log(data.body)

      // 右侧导航栏动态排序
      let first = data.body.map(function (item) {
        const arr = item.pinyin.substr(0, 1).toUpperCase()
        return arr
      })

      this.CityIndex = [...new Set(first)].sort()
      this.indexList = this.indexList.concat(this.CityIndex)
      // 全部城市的首字母
      // console.log(this.CityIndex)
      first = this.CityIndex

      console.log(first, '首字母名字')

      // 按照字母排序城市
      const cityList = {}
      const SortCity = data.body.sort((c1, c2) => {
        return pinyin(c1.pinyin, { pattern: 'first' }) <
          pinyin(c2.pinyin, { pattern: 'first' })
          ? -1
          : 1
      })
      console.log(SortCity, '===排序城市')
      let SortCityList = SortCity.map(function (val) {
        const firstName = val.pinyin.substr(0, 1).toUpperCase()
        if (firstName in cityList) {
          cityList[firstName].push(val)
        } else {
          cityList[firstName] = [val]
        }
        return cityList
      })
      SortCityList = [...new Set(SortCityList)][0]

      this.cityList = SortCityList
      console.log(this.cityList, '城市分类')
    },
    // 获取热门城市
    async getHotCityList() {
      const { data } = await hotCityApi()
      this.hotCityList = data.body
      console.log(data.body)
    },
    // 点击跳回
    async Togo(index) {
      const { data } = await hotCityApi()
      console.log(data.body, '点击')
      this.$store.commit('changeCityName', data.body[index].label)

      this.$router.back()
    },
    async TogoHome(val) {
      await hotCityApi()
      this.$store.commit('changeCityName', val)
      this.$router.back()
    }
  },

  mounted() {
    this.getCityList()
    this.getHotCityList()
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
/deep/.van-index-anchor {
  font-size: 14px;
  padding: 10px 15px;
  color: rgb(153, 153, 153);
}
</style>
