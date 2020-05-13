<template>
  <!-- <div>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <div>
      <router-view></router-view>
    </div>
  </div> -->
  <div class="bottomBox">
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/about"
        icon="home-o"
      >
        标签
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/test"
        icon="search"
      >
        标签
      </van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { active: 2 }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.bottomBox {
  position: sticky;
  bottom: 0px;
}
</style>
