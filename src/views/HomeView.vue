<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";

import { useRouter } from "vue-router";
import { useAuthState } from "@/stores/auth";

const authStore = useAuthState();
const router = useRouter();

let ishover = ref(null);

function logout() {
  authStore.$reset();
  sessionStorage.clear();
  router.replace("/login");
}
</script>

<template>
  <main class="flex flex-col items-center m6">
    <section class="wfull h300px flex justify-center relative">
      <div class="w1100px bg-gray-300 rounded-xl shadow-md overflow-hidden">
        <img
          src="https://picsum.photos/id/57/800/300"
          alt="cover"
          class="wfull hfull object-cover"
        />
      </div>
      <div class="absolute z-20 -bottom-40 flex flex-col items-center">
        <div
          class="w200px h200px rounded-full overflow-hidden bg-gray-100 border-3 border-white shadow-md"
        >
          <img
            src="https://cdn.vuetifyjs.com/images/john.png"
            alt="profile"
            class="wfull hfull"
          />
        </div>
        <h3>{{ authStore.user }}</h3>
        <Button @click="logout" class="px4 rounded-full uppercase"
          >Logout</Button
        >
      </div>
    </section>
    <section class="mx2 lg:mx5 mt40">
      <h3>Gallery</h3>
      <div
        class="grid grid-rows-4 grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3"
      >
        <template v-for="i in 20" :key="i">
          <div
            @mouseover="ishover = i"
            @mouseleave="ishover = null"
            role="button"
            class="relative rounded-xl bg-gray-200 shadow-md overflow-hidden"
          >
            <div
              v-show="ishover === i"
              class="absolute z-10 wfull hfull flex justify-center items-center bg-[rgba(255,255,255,0.7)]"
            >
              <Button
                @click="
                  router.push({ path: '/preview', query: { id: i + 20 } })
                "
                class="px3"
                >View</Button
              >
            </div>
            <img
              class="wfull hfull object-cover"
              :src="`https://picsum.photos/id/${i + 20}/200/200`"
              alt="gallery"
            />
          </div>
        </template>
      </div>
    </section>
  </main>
</template>
