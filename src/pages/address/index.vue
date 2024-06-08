<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '地址',
  },
}
</route>

<template>
  <view class="p-3">
    <view v-if="ardessList.length > 0">
      <view class="flex-1 mb-3 overflow-auto flex flex-col gap-2">
        <view v-for="i in 3" :key="i" class="bg-white p-3 rounded-md flex flex-col gap-2">
          <view class="flex justify-between">
            <text class="font-bold">多多台球助教陪练</text>
            <view class="font-bold">-200.17</view>
          </view>
          <view class="text-gray-500">
            <tetx>订单号：1111111111</tetx>
            <tetx class="ml-2">支付方式：222</tetx>
            <view class="mt-1">2024-4-8 14</view>
          </view>
        </view>
      </view>
    </view>
    <view v-else>暂无地址，请添加地址</view>
    <wd-button block size="large">添加地址</wd-button>
  </view>
</template>

<script lang="ts" setup>
const ardessList = ref([{}])
</script>
