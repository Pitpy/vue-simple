<script setup>
let props = defineProps(["class", "type"]);
</script>
<template>
  <button
    :type="type ?? 'button'"
    role="button"
    @click="$emit('click')"
    :class="props.class"
    class="rounded outline-none border-1 border-gray-300 py2 hover:border-blue-300 important-active:border-blue-200"
  >
    <slot></slot>
  </button>
</template>
