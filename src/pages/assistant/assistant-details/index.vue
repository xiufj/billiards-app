<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '助教详情',
  },
}
</route>

<template>
  <view>
    <wd-swiper :list="swiperList" :current="0" :indicator="{ type: 'dots-bar' }"></wd-swiper>
  </view>
</template>

<script lang="ts" setup>
const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])
</script>
