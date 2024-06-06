<route lang="json5" type="hone">
{
  style: {
    navigationBarTitleText: '订单',
  },
}
</route>

<template>
  <view class="h-full flex flex-col">
    <wd-segmented :options="list" v-model:value="current" size="large" customClass="!bg-white">
      <template #label="{ option }">
        <view class="name">
          {{ option.value }}
        </view>
      </template>
    </wd-segmented>
    <view class="flex-1 mp-4 flex flex-col pb-3 overflow-auto">
      <view class="bg-white rounded-3 flex flex-col mt-3 mx-3 p-3" v-for="i in 10" :key="i">
        <view class="flex justify-between">
          <view class="flex items-center gap-3">
            <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="30" height="30" round />
            <text class="font-bold">多多助教</text>
            <wd-icon name="arrow-right" size="24px"></wd-icon>
          </view>
          <text class="text-red font-bold">已完成</text>
        </view>
        <view class="my-3 h-[1rpx] bg-gray-200" />
        <view class="flex">
          <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="100" height="100" radius="20" />
          <view class="flex-1 flex flex-col justify-center gap-1 py-4 px-3">
            <view class="flex items-center gap-3">
              <text class="font-bold">多多助教</text>
              <text class="font-bold text-gray-700 text-xs">X1</text>
            </view>
            <text class="text-gray-700 text-xs">预约时间 2024-2-10 12:12:12</text>
          </view>
          <text class="text-gray-700">¥90.00</text>
        </view>
        <view class="flex justify-end">
          <view class="flex gap-2">
            <text>取消</text>
            <wd-button
              type="info"
              size="small"
              plain
              hairline
              round
              customClass="!h-[36rpx]"
              @click="confirm"
            >
              取消22
            </wd-button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useMessage, useToast } from 'wot-design-uni'
const message = useMessage()
const toast = useToast()
const current = ref('李雷')
const list = ref([
  {
    value: '全部',
  },
  {
    value: '待支付',
  },
  {
    value: '进行中',
  },
  {
    value: '待评价',
  },
])

function confirm() {
  message
    .confirm({
      msg: '是否删除',
      title: '提示',
      beforeConfirm: ({ resolve }) => {
        toast.loading('删除中...')
        setTimeout(() => {
          toast.close()
          resolve(true)
          toast.success('删除成功')
        }, 2000)
      },
    })
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}
</script>
