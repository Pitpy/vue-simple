<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <main class="flex flex-col items-center gap5 m5">
    <a
      target="_blank"
      :href="`https://picsum.photos/id/${route.query['id']}/500/300`"
      >{{ `https://picsum.photos/id/${route.query["id"]}/500/300` }}</a
    >
    <div class="w50% h500px bg-gray-200 overflow-hidden rounded-md">
      <img
        class="wfull hfull object-content"
        :src="`https://picsum.photos/id/${route.query['id']}/500/300`"
        alt="gallery"
      />
    </div>
  </main>
</template>
