<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的',
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
    <view class="flex-1 m-3 overflow-auto bg-white rounded-[10px] p-3">
      <view class="flex items-center mb-4" v-for="i in 30" :key="i">
        <wd-img src="https://img.yzcdn.cn/vant/cat.jpeg" width="40" height="40" round />
        <text class="flex-1 ml-3 font-bold">标签标签标签标签标签</text>
        <wd-button type="info" size="small" :round="false">信息按钮</wd-button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const list = ref([
  {
    value: '助教',
  },
  {
    value: '球房',
  },
  {
    value: '粉丝',
  },
])

const tab = ref(0)
</script>
