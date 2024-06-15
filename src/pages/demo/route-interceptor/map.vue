<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '自动登录（无需拦截）',
  },
}
</route>

<template>
  <view class="mt-8 text-center p-4">
    <wd-button @click="getLocation">获取位置</wd-button>
  </view>
  <map
    style="width: 100%; height: 300px"
    :markers="markers"
    :latitude="latitude"
    :longitude="longitude"
    :scale="14"
    @regionchange="regionchange"
    @updated="updated"
  />
</template>

<script lang="ts" setup>
const latitude = ref() // 当前位置的纬度
const longitude = ref() // 当前位置的经度
const markers = ref() // 设置标记点
onLoad(() => {
  getLocation()
})
// 监听地图视野发生变化
const regionchange = (e) => {
  console.log(e)
  if (e.type === 'end') {
    markers.value = [
      {
        id: 1,
        latitude: 36.68213,
        longitude: 117.06633,
        width: 20,
        height: 30,
        title: 'New York City',
      },
      {
        id: 2,
        latitude: 36.68313,
        longitude: 117.06733,
        width: 20,
        height: 30,
        title: 'New York City',
      },
    ]
  }
}

// 在地图渲染更新完成时触发
const updated = (e) => {
  console.log(e)
}
// 获取位置
const getLocation = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      latitude.value = res.latitude
      longitude.value = res.longitude
      markers.value = [
        {
          id: 1,
          latitude: 36.68013,
          longitude: 117.06533,
          width: 20,
          height: 30,
          title: 'New York City',
        },
        {
          id: 2,
          latitude: 36.68113,
          longitude: 117.06633,
          width: 20,
          height: 30,
          title: 'New York City',
        },
      ]
    },
    fail: function (res) {
      console.log(res)
    },
    complete: function (res) {
      console.log('当前位置的经度：' + res.longitude)
      console.log('当前位置的纬度：' + res.latitude)
    },
  })
}
</script>
