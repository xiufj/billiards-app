<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的球房',
  },
}
</route>

<template>
  <view class="h-full flex flex-col">
    <wd-tabs v-model="tab">
      <block v-for="item in list" :key="item">
        <wd-tab :title="item.value"></wd-tab>
      </block>
    </wd-tabs>
    <!-- 我的球房 -->
    <view class="flex-1 m-3 overflow-auto bg-white rounded-[10px] p-3" v-if="tab === 0">
      <div class="flex items-center">
        <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="40" height="40" round />
        <text class="flex-1 ml-3 font-bold">标签标签标签标签标签</text>
        <wd-button type="info" size="small" :round="false">解约</wd-button>
      </div>
      <wd-gap bg-color="#d1d5db" height="2rpx" class="my-3"></wd-gap>

      <div class="flex items-center">
        <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="40" height="40" round />
        <text class="flex-1 ml-3 font-bold">标签标签标签标签标签</text>
        <wd-button type="info" size="small" :round="false">解约</wd-button>
      </div>
      <wd-gap bg-color="#d1d5db" height="2rpx" class="my-3"></wd-gap>
    </view>
    <view class="flex-1 m-3 overflow-auto bg-white rounded-[10px] p-3" v-if="tab === 1">
      <view v-for="i in 30" :key="i">
        <div class="flex items-center">
          <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="40" height="40" round />
          <text class="flex-1 ml-3 font-bold">标签标签标签标签标签</text>
          <wd-button type="info" size="small" :round="false">解约</wd-button>
        </div>
        <wd-gap bg-color="#d1d5db" height="2rpx" class="my-3"></wd-gap>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const list = ref([
  {
    value: '球房信息',
  },
  {
    value: '球房助教',
  },
  {
    value: '球台价格',
  },
])

const tab = ref(1)
</script>
