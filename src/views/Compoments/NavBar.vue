<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
    />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    }
  },
  components: {},
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      this.$router.back()
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
</style>
