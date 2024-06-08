<route lang="json5">
{
  style: { navigationBarTitleText: '我的' },
}
</route>
<template>
  <view class="h-full flex flex-col">
    <view class="py-6 px-4 flex justify-between">
      <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="80" height="80" round />
      <text class="flex-1 ml-8 m-auto font-bold">ddddddddd</text>
      <wd-icon
        name="setting"
        size="22px"
        @click="goDetailPage('pages/my/my-setting/index')"
      ></wd-icon>
    </view>
    <view class="bg-white mx-3 rounded p-4" @click="goDetailPage('pages/my/follow-fans/index')">
      <text class="font-bold text-[36rpx]">我的关注</text>
      <view class="flex items-center justify-between mx-3 mt-4">
        <view class="flex flex-col justify-center text-center gap-1">
          <text class="text-red font-bold text-xl">130</text>
          <text class="text-gray-700">关注助教</text>
        </view>
        <view class="flex flex-col justify-center text-center gap-1">
          <text class="text-red font-bold text-xl">130</text>
          <text class="text-gray-700">关注球房</text>
        </view>
        <view class="flex flex-col justify-center text-center gap-1">
          <text class="text-red font-bold text-xl">130</text>
          <text class="text-gray-700">粉丝</text>
        </view>
      </view>
    </view>
    <view class="bg-white mx-3 mt-4 rounded">
      <view class="flex items-center p-4 gap-6">
        <view class="flex flex-col justify-center text-center gap-1">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700 text-[14px]">我的动态</text>
        </view>
        <view class="flex flex-col justify-center text-center gap-1">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700 text-[14px]">相册</text>
        </view>
      </view>
    </view>
    <view class="bg-white mx-3 rounded mt-4 p-4">
      <text class="font-bold text-[36rpx]">我的钱包</text>
      <view class="flex items-center justify-between mx-3 mt-4">
        <view
          class="flex flex-col justify-center text-center gap-1"
          @click="goDetailPage('pages/my/balance/index')"
        >
          <text class="font-bold text-xl">130</text>
          <text class="text-gray-700">余额</text>
        </view>
        <view
          class="flex flex-col justify-center text-center gap-1"
          @click="goDetailPage('pages/my/vouchers/index')"
        >
          <text class="font-bold text-xl">130</text>
          <text class="text-gray-700">代金券</text>
        </view>
        <view
          class="flex flex-col justify-center items-center text-center gap-1"
          @click="goDetailPage('pages/my/bill/index')"
        >
          <text class="font-bold text-xl">130</text>
          <text class="text-gray-700">
            收入
            <wd-tag type="danger" size="large">提现</wd-tag>
          </text>
        </view>
      </view>
    </view>
    <view class="bg-white mx-3 rounded mt-4 p-4">
      <text class="font-bold text-[36rpx]">更多功能</text>
      <view class="flex items-center justify-between mx-3 mt-4 flex-wrap gap-4">
        <view class="flex flex-col justify-center text-center gap-1 w-1/5">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700">关注助教</text>
        </view>
        <view class="flex flex-col justify-center text-center gap-1 w-1/5">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700">关注球房</text>
        </view>
        <view class="flex flex-col justify-center items-center text-center gap-1 w-1/5">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700">粉丝</text>
        </view>
        <view class="flex flex-col justify-center items-center text-center gap-1 w-1/5">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700">粉丝</text>
        </view>
        <view class="flex flex-col justify-center items-center text-center gap-1 w-1/5">
          <wd-icon name="setting" size="22px"></wd-icon>
          <text class="text-gray-700">粉丝</text>
        </view>
      </view>
    </view>
  </view>
  <!-- <view class="ml-4">wx的openid:</view>
  <view class="ml-4">{{ openId }}</view>
  <wx-login /> -->
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { http } from '@/utils/http'
import WxLogin from './components/wx-login.vue'

const userStore = useUserStore()
const openId = ref('')

const goDetailPage = (path: string) => {
  const url = `/${path}`
  uni.navigateTo({
    url,
  })
}
// 用户登录，获取openId
uni.login({
  provider: 'weixin',
  success: async ({ code }) => {
    const res = await http<{ session_key: string; openid: string }>({
      method: 'GET',
      url: '/weixin/jscode2session',
      data: {
        code,
      },
    })
    console.log('微信登录-1：', res)
    // {code: 0, msg: "success", data: {session_key: "JTzhLVK+oM3X58uJ/heDcQ==", openid: "oSYa06xPVqjsK-eFYzt0kSPYu1q4"}}
    openId.value = res.data.openid
    userStore.setUserInfo({ openid: res.data.openid })
  },
})
</script>
