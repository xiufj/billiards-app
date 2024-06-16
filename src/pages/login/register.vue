<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '注册',
  },
}
</route>
<template>
  <view class="flex flex-col items-center justify-center h-full bg-white">
    <wd-img
      class="mt-20"
      :width="150"
      :height="150"
      round
      src="https://unpkg.com/wot-design-uni-assets/capybara.jpg"
    />
    <view class="flex-1 flex justify-center mt-4">
      <view class="p-4 w-full">
        <wd-input
          type="number"
          label="手机号"
          size="large"
          label-width="120rpx"
          v-model="loginform.phone"
          useSuffixSlot
          no-border
          placeholder="请输入手机号码"
        >
          <template v-slot:suffix>
            <view @click="getcode()" :style="{ color: loginform.phone ? '#3578f5' : '#bfbfbf' }">
              {{ code }}
            </view>
          </template>
        </wd-input>
        <view class="my-2 h-[1rpx] bg-gray-200" />
        <text class="mx-3 mt-4 mb-2 block">验证码</text>
        <wd-input
          type="number"
          label-width="120rpx"
          no-border
          size="large"
          v-model="loginform.code"
          placeholder="请输入验证码"
        />
        <view class="my-2 h-[1rpx] bg-gray-200" />
        <view class="w-58 m-auto pt-8">
          <wd-button
            custom-class="!rounded-2"
            block
            size="large"
            :loading="loading"
            @click="save()"
          >
            登录
          </wd-button>
        </view>
        <view class="flex items-center mt-4 text-xs text-gray-500">
          <wd-checkbox v-model="isAgree" />
          注册即代表同意
          <text @click="agree(1)" class="text-blue">《用户协议》</text>
          和
          <text @click="agree(2)" class="text-blue">《隐私政策》</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { isMobile } from '@/utils/rules'

const loginform = reactive({
  phone: '',
  code: '',
  password: '',
})
const type = ref(1) // 1快速注册 2忘记密码
const code = ref('获取验证码')
const loading = ref(true)
const time = ref(60)
const timer = ref(null)
const isAgree = ref(false)

onLoad((options) => {
  type.value = options.type
  if (options.type === 1) {
    uni.setNavigationBarTitle({
      title: '快速注册',
    })
  }
  if (options.type === 2) {
    uni.setNavigationBarTitle({
      title: '忘记密码',
    })
  }
})

// 获取验证码
const getcode = () => {
  console.log(timer.value)

  if (timer.value) return
  if (!isMobile(loginform.phone)) {
    uni.showToast({
      title: '请输入正确的手机号码',
      icon: 'none',
    })
    return
  }
  // uni.showLoading({
  // 	title:"获取中"
  // })
  // 请求获取验证码接口，如果成功，则进行倒计时
  timer.value = setInterval(() => {
    if (time.value <= 1) {
      time.value = 60
      clearInterval(timer.value)
      timer.value = null
      code.value = '重新获取'
    } else {
      time.value--
      code.value = '重新获取(' + time.value + ')'
    }
  }, 1000)
}
// 提交表单
const save = () => {
  if (!isMobile(loginform.phone)) {
    uni.showToast({
      title: '请输入正确的手机号码',
      icon: 'none',
    })
    return
  }
  if (!loginform.code) {
    uni.showToast({
      title: '请输入验证码',
      icon: 'none',
    })
    return
  }
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/
  if (!reg.test(loginform.password)) {
    uni.showToast({
      title: '请输入8-20为字母+数字组合',
      icon: 'none',
    })
  }
}
// 用户使用协议
const agree = (type) => {
  uni.navigateTo({
    url: '/pages/login/agreement?type=' + type,
  })
}
</script>
