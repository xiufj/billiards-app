<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '代金券',
  },
}
</route>

<template>
  <view class="h-full flex flex-col pt-3">
    <wd-card v-for="i in 10" :key="i">
      <template #title>
        <view>
          <text class="font-bold">多多20圆代金券</text>
          <wd-tag type="danger" plain class="ml-3">即将过期</wd-tag>
        </view>
      </template>
      <view class="flex justify-between border-b border-gray-300">
        <view>
          <tetx>慢100可用</tetx>
          <br />
          <tetx>有效期至：2024-4-8 14</tetx>
        </view>
        <text class="text-red font-bold text-xl">
          <text class="text-xs">¥</text>
          380.11
        </text>
      </view>
      <template #footer>
        <wd-gap bg-color="#d1d5db" height="3rpx"></wd-gap>
        <view class="flex justify-between pt-3 items-center">
          <text class="flex-1 text-left">指定店铺可用</text>
          <wd-button size="small" :rounded="false" type="error" plain>立即使用</wd-button>
        </view>
      </template>
    </wd-card>
  </view>
</template>

<script lang="ts" setup></script>
