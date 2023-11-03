<script setup>
const props = defineProps({
  fullHeight: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="screenWrapper"
    :class="{ 'screenWrapper-fullHeight': props.fullHeight }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.screenWrapper {
  z-index: 2;
  width: 100%;
  max-width: $maxWidth;

  &-fullHeight {
    height: 100vh;
  }
}
</style>
