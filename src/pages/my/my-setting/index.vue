<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的',
  },
}
</route>

<template>
  <view class="m-3">
    <view class="p-1 bg-white rounded-[10px]">
      <wd-cell-group border>
        <wd-cell title="头像" size="large" is-link to="/pages/index/index" icon="setting"></wd-cell>
        <wd-cell title="昵称" value="内容" size="large" is-link to="/pages/button/index"></wd-cell>
        <wd-cell title="性别" value="内容" size="large" is-link to="/pages/button/index"></wd-cell>
        <wd-cell
          title="手机号"
          value="内容"
          size="large"
          is-link
          to="/pages/button/index"
        ></wd-cell>
        <wd-cell
          title="出生日期"
          value="内容"
          size="large"
          is-link
          to="/pages/button/index"
        ></wd-cell>
      </wd-cell-group>
    </view>
    <view class="p-1 bg-white rounded-[10px] mt-3">
      <wd-cell-group border>
        <wd-cell
          title="注销账号"
          size="large"
          is-link
          to="/pages/index/index"
          icon="setting"
        ></wd-cell>
        <wd-cell
          title="退出账号"
          value="内容"
          size="large"
          is-link
          to="/pages/button/index"
        ></wd-cell>
      </wd-cell-group>
    </view>
    <wd-button block class="mt-6" size="large">保存</wd-button>
  </view>
</template>

<script lang="ts" setup></script>
