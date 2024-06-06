<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view class="px-2" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <wd-swiper
      :list="swiperList"
      autoplay
      :current="0"
      @click="handleClick"
      @change="onChange"
    ></wd-swiper>
    <view
      class="border border-solid border-dark-50 rounded flex justify-center justify-between py-4 px-6"
    >
      <view class="flex flex-col gap-2 items-center">
        <wd-icon name="add-circle" class="text-6xl" />
        <text>爽约包赔</text>
      </view>
      <view class="flex flex-col gap-2 items-center">
        <wd-icon name="add-circle" class="text-6xl" />
        <text>爽约包赔</text>
      </view>
      <view class="flex flex-col gap-2 items-center">
        <wd-icon name="add-circle" class="text-6xl" />
        <text>爽约包赔</text>
      </view>
      <view class="flex flex-col gap-2 items-center">
        <wd-icon name="add-circle" class="text-6xl" />
        <text>爽约包赔</text>
      </view>
    </view>
    <wd-segmented :options="list" v-model:value="current1"></wd-segmented>

    <wd-tabs v-model="tab">
      <block v-for="item in 4" :key="item">
        <wd-tab :title="`标签${item}`">
          <view class="content">内容{{ item }}</view>
        </wd-tab>
      </block>
    </wd-tabs>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])
const aa = reactive({})
const current1 = ref('李雷')
const list = ref([
  {
    value: '助教',
  },
  {
    value: '优惠券',
  },
  {
    value: '合作球房',
  },
])

const tab = ref(0)
function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}
</script>
