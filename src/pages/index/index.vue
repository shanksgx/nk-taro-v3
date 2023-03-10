<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }} <Dongdong /> {{ counter.count }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
      <nut-button type="primary" @click="onAdd">点我</nut-button>
    </view>
    <div class="footer safe-area-bottom">
      <nut-button type="primary" block>底部安全区域</nut-button>
    </div>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Dongdong } from '@nutui/icons-vue-taro'
import { useCounterStore } from "../../store/counter"

export default {
  name: 'Index',
  components: {
    Dongdong
  },
  setup() {
    const counter = useCounterStore()

    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    const onAdd = () => {
      counter.$patch({count: counter.count + 1})
    }

    return {
      ...toRefs(state),
      handleClick,
      onAdd,
      counter
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
