<template>
  <view class="setting">setting</view>
</template>

<script lang="ts" setup>
onLoad(e => {
  console.log(e);
});

const props = defineProps<{ id: number }>();
console.log('🚀 ~ props:', props);
</script>

<style lang="scss" scoped></style>
