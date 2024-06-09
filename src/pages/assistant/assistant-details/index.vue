<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '助教详情',
  },
}
</route>

<template>
  <view class="flex flex-col h-full">
    <wd-swiper
      :list="swiperList"
      :current="0"
      :indicator="{ type: 'dots-bar', showControls: true }"
      customClass="assistant-details"
    ></wd-swiper>
    <view class="h-11 bg-yellow-200">1</view>
    <view class="bg-white p-3 flex flex-col gap-3 flex-1">
      <text class="font-bold">动态</text>
      <view class="w-full overflow-x-auto flex gap-3">
        <wd-img
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          width="200"
          height="300"
          radius="10"
          class="shrink-0"
        />
        <wd-img
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          width="200"
          height="300"
          radius="10"
          class="shrink-0"
        />
        <wd-img
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          width="200"
          height="300"
          radius="10"
          class="shrink-0"
        />
      </view>
      <wd-gap bg-color="#d1d5db" height="2rpx"></wd-gap>
      <text class="font-bold">用户评价100+</text>
      <view class="flex flex-wrap gap-3">
        <wd-tag type="danger" size="large" round>标签</wd-tag>
        <wd-tag type="danger" round>标签</wd-tag>
        <wd-tag type="danger" round>标签</wd-tag>
        <wd-tag type="danger" round>标签</wd-tag>
        <wd-tag type="danger" round>标签</wd-tag>
      </view>
      <view class="flex flex-col gap-3" v-for="i in 5" :key="i">
        <view class="flex">
          <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="60" height="60" round />
          <view class="flex-1 flex flex-col ml-2 gap-1 text-gray-500">
            <text class="text-gray-700">多多助教</text>
            <view>
              <wd-rate :modelValue="2" />
              |
              <text class="text-xs">评价90+</text>
            </view>
          </view>
          <text class="text-xs text-gray-500">2023-4-6</text>
        </view>
        <text class="text-gray-700 indent-[68px]">多多助教</text>
        <wd-gap bg-color="#d1d5db" height="2rpx"></wd-gap>
      </view>
      <wd-status-tip image="content" tip="暂无评价" />
    </view>
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
