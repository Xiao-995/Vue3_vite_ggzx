<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + SvgName" :fill="SvgColor"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
// 接收参数
const props = defineProps({
  // 前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 图标名
  SvgName: {
    type: String,
  },
  //  图标颜色
  SvgColor: {
    type: String,
  },
  width: {
    type: String,
    default: "16px",
  },
  height: {
    type: String,
    default: "16px",
  },
});
</script>
