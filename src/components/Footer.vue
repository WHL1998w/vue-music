<template>
  <div id="appfooter">
    <div class="wrap">
      <div class="image">
        <router-link :to="'/songdetail/' + detail.id">
          <img v-lazy="imgurl.picUrl" ref="img" alt />
        </router-link>
      </div>
      <div class="geming" ref="name">{{ detail.name }}</div>
      <div class="playicon">
        <i class="iconfont" id="playicon" @click="playaudiofooter">&#xe630;</i>
      </div>
      <div class="liebiao">
        <i class="iconfont" @click="showPopup">&#xe63b;</i>
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
    playaudiofooter(e) {
      let audio = document.getElementsByClassName('audio')[0]
      if (audio !== null) {
        //检测播放是否已暂停.
        if (audio.paused) {
          if (JSON.parse(sessionStorage.getItem('songid')).length !== 0) {
            // eslint-disable-next-line no-unused-vars
            let playpromise = audio.play()
            // eslint-disable-next-line no-undef
            if (playPromise) {
              // eslint-disable-next-line no-undef
              playPromise
                .then(() => {
                  setTimeout(() => {
                    e.target.innerHTML = '&#xe606;'
                    this.$toast.success('开始播放')
                  }, 2000)
                })
                .catch((err) => {
                  console.log(err)
                })
            }
          } else {
            this.$toast('当前列表没有歌曲,请去其他位置听歌')
          }
        } else {
          audio.pause()
          e.target.innerHTML = '&#xe630;'
          this.$toast.fail('暂停播放')
        }
      }
    },
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
  computed: {
    // 获取信息
    // eslint-disable-next-line vue/return-in-computed-property
    getimg() {
      // 默认
      if (JSON.parse(sessionStorage.getItem('songid')).length == 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$refs.img.src = 'https://hexophoto-1259178461.cos.ap-beijing.myqcloud.com/photos/6.jpg'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$refs.name.innerHTML = '请播放歌曲!'
      } else {
        // 显示当前播放歌曲信息
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.current = JSON.parse(sessionStorage.getItem('current'))
        // 获取歌曲信息
        // eslint-disable-next-line vue/no-async-in-computed-properties
        this.axios.get('/song/detail?ids=' + this.current).then((res) => {
          this.detail = res.data.songs[0]
          this.imgurl = this.detail.al
        })
      }
    }
  },
  mounted() {
    let audio = document.getElementsByClassName('audio')[0]
    let playicon = document.getElementById('playicon')
    if (audio.paused) {
      // 暂停
      playicon.innerHTML = '&#xe612;'
    } else {
      //播放
      playicon.innerHTML = '&#xe68e;'
    }
    this.getimg
  }
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
