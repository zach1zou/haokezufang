<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="#21b97a"
      inactive-color="#888888"
      route
    >
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/list">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/home/news">资讯</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/home/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
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
      active: 0
    }
  },
  methods: {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped></style>
