<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的账单',
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
    <view class="m-3 flex items-center">
      <wd-datetime-picker v-model="value" type="year-month" use-default-slot>
        <wd-button size="small" custom-class="!bg-white !text-[#333] ">
          本月
          <wd-icon name="arrow-down" />
        </wd-button>
      </wd-datetime-picker>
      <view class="flex flex-col text-xs text-gray-500 flex-1 justify-end items-end">
        <text>本月累计收入</text>
        <text>本月累计收入</text>
      </view>
    </view>
    <view class="flex-1 mx-3 mb-3 overflow-auto flex flex-col gap-2">
      <view v-for="i in 10" :key="i" class="bg-white p-3 rounded-md flex flex-col gap-2">
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
</template>

<script lang="ts" setup>
const value = ref<number>(Date.now()) // 年月选择
const list = ref([
  {
    value: '消费记录',
  },
  {
    value: '订单收入',
  },
  {
    value: '退款记录',
  },
  {
    value: '充值记录',
  },
])

const tab = ref(0)
</script>
