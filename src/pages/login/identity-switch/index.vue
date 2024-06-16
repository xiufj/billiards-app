<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="px-3">
    <text class="text-xl text-center font-bold block mt-18">欢迎来到哆哆球房</text>
    <text class="block text-gray-500 text-sm mt-3 mb-10 text-center">以下三种身份可随时切换</text>
    <view
      class="bg-white mt-4 px-4 py-7 rounded-lg flex items-center active:bg-gray-200"
      v-for="(item, index) in indentify"
      :key="index"
      @click="goDetailPage(item.path)"
    >
      <view class="flex items-center justify-center rounded-full">
        <wd-img
          :width="80"
          :height="80"
          round
          src="https://unpkg.com/wot-design-uni-assets/capybara.jpg"
        />
      </view>
      <view class="flex flex-col ml-3 flex-1">
        <text class="text-xl">{{ item.title }}</text>
        <text class="text-gray-400 text-sm mt-2">{{ item.describetion }}</text>
      </view>
      <wd-icon name="arrow-right" size="22px" class="text-gray-300" />
    </view>
  </view>
</template>

<script lang="ts" setup>
// 身份切换
const indentify = [
  { title: '普通用户', describetion: '寻找教练', path: '/pages/login/identity-information/index' },
  { title: '助教', describetion: '成为助教、教练' },
  { title: '球房', describetion: '寻找附近的球房' },
]

const goDetailPage = (path: string) => {
  const url = `${path}`
  uni.navigateTo({
    url,
  })
}
</script>
