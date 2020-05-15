<template>
  <div id="ranking">
    <!-- 排行榜 -->
    <van-grid :column-num="2">
      <van-grid-item v-for="(item, index) in rankarr" :key="index">
        <router-link :to="'/ranking/' + item.id">
          <div class="img">
            <img v-lazy="item.coverImgUrl" />
            <div class="title">{{ item.updateFrequency }}</div>
          </div>
        </router-link>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  data() {
    return {
      rankarr: []
    }
  },
  components: {},
  created() {},
  mounted() {
    this.getdetail()
  },
  methods: {
    // 所有榜单内容摘要
    getdetail() {
      this.axios.get('/toplist/detail').then((res) => {
        this.rankarr = res.data.list
      })
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.van-grid {
  background: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  .van-grid-item {
    .img {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .title {
        position: absolute;
        top: 8rem;
        left: 3rem;
        color: white;
      }
    }
  }
}
</style>
