<template>
  <div class="text-primary" @tap="handleLink">mine</div>
</template>

<script lang="ts" setup>
function handleLink() {
  uni.navigateTo({ url: '/member/setting/setting?id=1' });
}
</script>

<style lang="scss" scoped></style>
