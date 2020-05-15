<template>
  <div id="sheetid">
    <div class="wrap">
      <detail :title="title" />
    </div>
  </div>
</template>

<script>
import detail from '../Common/Detail'
export default {
  name: 'sheetdetails',
  data() {
    return {
      // 传递到子组件中的值
      title: '歌单详情'
    }
  },
  components: { detail }
}
</script>

<style scoped lang="scss"></style>
