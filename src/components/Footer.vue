<template>
  <div id="appfooter">
    <div class="wrap">
      <div class="image">
        <router-link :to="'/songdetail/' + detail.id">
          <img :src="imgurl.picUrl" ref="img" alt />
        </router-link>
      </div>
      <div class="geming" ref="name">{{ detail.name }}</div>
      <div class="playicon">
        <i class="iconfont" id="playicon" @click="playaudiofooter">&#xe612;</i>
      </div>
      <div class="liebiao">
        <i class="iconfont" @click="showPopup">&#xe609;</i>
        <van-popup v-model="show" round position="bottom" :style="{ height: '50%' }">
          <playhistory v-if="isshow" />
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import playhistory from './Popup/Playhistory'
export default {
  name: 'appfooter',
  components: {
    playhistory
  },
  data() {
    return {
      // 从vuex获取id
      current: [],
      detail: '',
      imgurl: '',
      show: false,
      // 列表组件
      isshow: true
    }
  },
  provide() {
    return {
      refooter: this.refooter
    }
  },
  methods: {
    // 弹出层
    showPopup() {
      this.show = true
    },
    // 重新加载列表组件
    refooter() {
      this.isshow = false
      this.$nextTick(() => {
        this.isshow = true
      })
    }
  },
  computed: {}
}
</script>
<style scoped>
#appfooter {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background: rgb(210, 69, 55);
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
i {
  font-size: 2rem;
  margin-right: 10px;
  color: #ffffff;
}
/* 歌的图像 */
.image {
  width: 3.4rem;
  height: 3.4rem;
}
.image img {
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  animation: change 6s infinite linear;
}
@keyframes change {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* 开始播放icon */
.palyicon {
  font-size: 2rem;
}
</style>
