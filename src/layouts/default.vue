<template>
  <view class="default-layout">
    <slot />
    <wd-toast />
    <wd-message-box />
  </view>
</template>

<style lang="scss">
.default-layout {
  height: 100vh;
  background: #f1f2f7;
  /* #ifdef H5 */
  // padding-bottom: 50px;
  // overflow: auto;
  /* #endif */
}
</style>
