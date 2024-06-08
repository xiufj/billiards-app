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
        <wd-card custom-class="!m-0" custom-footer-class="!p-2" v-for="i in 3" :key="i">
          <template #title>
            <view class="flex justify-between">
              <text class="font-bold">
                多多
                <text class="ml-3 font-medium text-gray-600">2222222222222222</text>
              </text>
              <wd-icon name="delete"></wd-icon>
            </view>
          </template>
          <view class="text-gray-600">
            <tetx class="ellipsis">订单号：1111111111</tetx>
          </view>
        </wd-card>
      </view>
    </view>
    <view v-else>暂无地址，请添加地址</view>
    <wd-button block size="large">添加地址</wd-button>
  </view>
</template>

<script lang="ts" setup>
const ardessList = ref([{}])
</script>
