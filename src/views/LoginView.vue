<script setup>
import { ref } from "vue";

import Button from "@/components/Button.vue";

import { useRouter } from "vue-router";
import { useAuthState } from "@/stores/auth.js";

const authStore = useAuthState();
const router = useRouter();

let username = ref("");
let password = ref("");
let message = ref("");

function login() {
  message.value = "";
  if (username.value && password.value) {
    authStore.isLogin = true;
    authStore.user = username.value;
    sessionStorage.setItem("isLogin", true);
    sessionStorage.setItem("user", username.value);
    router.replace("/");
  } else {
    message.value = "Please enter username and password";
  }
}
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div
      class="flex flex-col justify-center items-center w35% h400px rounded-lg border-1 border-gray-200 bg-gray-50 _shadow"
    >
      <div class="flex flex-col items-center">
        <h2 class="text-blue-500">Welcome</h2>
        <h3 v-if="message" class="text-yellow-600">{{ message }}</h3>
      </div>
      <form @submit.prevent="login" class="w50% flex flex-col gap-3">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          class="appearance-none outline-none rounded py2 border-2 border-gray-200 focus:border-blue-200"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="appearance-none outline-none rounded py2 border-2 border-gray-200 focus:border-blue-200"
        />
        <Button type="submit" class="uppercase"> Login </Button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
