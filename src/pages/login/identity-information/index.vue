<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view>
    <view class="bg-red flex p-1">
      <wd-icon name="close" size="18px" class="text-gray-300" />
      <text class="mx-2">此功能需要进行实名认证!</text>
      <view class="rounded-1 bg-blue">实名认证</view>
    </view>
    <view class="p-3 mt-6">
      <view class="text-xl font-bold">请填写以下信息</view>
      <view class="rounded-2 bg-white p-1 mt-4">
        <wd-cell-group border>
          <wd-cell title="标题文字" size="large">
            <template #icon>
              <wd-img
                class="mr-2"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                width="24"
                height="24"
                round
              />
            </template>
            <view class="flex items-center justify-end">
              <text>dasdas</text>
              <wd-icon name="arrow-right" size="22px" class="text-gray-300" />
            </view>
          </wd-cell>
          <wd-cell title="标题文字" size="large">
            <template #icon>
              <wd-img
                class="mr-2"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                width="24"
                height="24"
                round
              />
            </template>
            <view class="flex items-center justify-end">
              <text>dasdas</text>
              <wd-icon name="arrow-right" size="22px" class="text-gray-300" />
            </view>
          </wd-cell>
          <wd-cell title="标题文字" size="large">
            <template #icon>
              <wd-img
                class="mr-2"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                width="24"
                height="24"
                round
              />
            </template>
            <view class="flex items-center justify-end">
              <text>dasdas</text>
              <wd-icon name="arrow-right" size="22px" class="text-gray-300" />
            </view>
          </wd-cell>
          <wd-cell title="标题文字" size="large">
            <template #icon>
              <wd-img
                class="mr-2"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                width="24"
                height="24"
                round
              />
            </template>
            <view class="flex items-center justify-end">
              <text>dasdas</text>
              <wd-icon name="arrow-right" size="22px" class="text-gray-300" />
            </view>
          </wd-cell>
          <wd-cell title="照片" size="large" vertical>
            <template #icon>
              <wd-img
                class="mr-2"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                width="24"
                height="24"
                round
              />
            </template>
            <view class="flex items-center justify-center bg-gray-100 rounded-lg w-25 h-25">
              <wd-icon name="add" size="22px" class="text-gray-400" />
            </view>
          </wd-cell>
        </wd-cell-group>
      </view>
      <wd-button block size="large" class="mt-8">申请审核</wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
</script>
