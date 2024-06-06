<template>
  <view class="default-layout" :style="{ height: windowHeight + 'px' }">
    <slot />
    <wd-toast />
    <wd-message-box />
  </view>
</template>

<script setup lang="ts">
const windowHeight = uni.getSystemInfoSync().windowHeight
</script>

<style lang="scss">
.default-layout {
  height: 100vh;
  /* #ifdef H5 */
  // padding-bottom: 50px;
  overflow: auto;
  /* #endif */
}
</style>
