<template>
  <div class="box">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { reqLogin } from "./api/user";
import { onMounted } from "vue";
onMounted(async () => {
  const res = await reqLogin({
    username: "admin",
    password: "123456789",
  });
  console.log(res);
});
</script>

<style scoped lang="scss">
.box {
  color: $color;
}
</style>
