<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '助教',
  },
}
</route>

<template>
  <view class="flex flex-col h-full">
    <wd-search v-model="value">
      <template #prefix>
        <view class="search-type">sss</view>
      </template>
    </wd-search>
    <view class="flex-1 flex flex-col p-3 overflow-auto">
      <view
        class="bg-white p-3 mb-3 rounded-[10px] flex items-center justify-between"
        v-for="item in 10"
        :key="item"
      >
        <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="100" height="100" radius="10" />
        <view class="flex-1 flex flex-col ml-2 gap-1">
          <text class="font-bold">多多助教</text>
          <text class="text-gray-500 text-xs">最早可约1200</text>
          <text class="text-gray-500 text-xs">年接单1000+</text>
          <text class="text-gray-500 text-xs">评价90+</text>
        </view>
        <view class="flex-1 flex flex-col ml-2 gap-1 justify-end items-end">
          <wd-icon name="more1" class="rotate-90 w-4 h-4"></wd-icon>
          <view class="text-gray-500 text-xs">
            <wd-icon name="location"></wd-icon>
            2.1Km
          </view>
          <wd-button
            size="small"
            class="mx-0 mt-1"
            @click="goDetailPage('pages/assistant/assistant-details/index')"
          >
            去下单
          </wd-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const value = ref<string>('')

const goDetailPage = (path: string) => {
  const url = `/${path}`
  uni.navigateTo({
    url,
  })
}
</script>
