import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import { useAuthState } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/preview",
      name: "preview",
      meta: { requiresAuth: true },
      component: () => import("@/views/PreviewView.vue"),
    },
  ],
});

// ຖ້າຍັງບໍ່ໄດ້ login ເທື່ອ ໃຫ້ກັບໄປຫນ້າ login ເພື່ອ login ກ່ອນຈຶ່ງໄປຫນ້າ home ໄດ້
router.beforeEach((to) => {
  const authStore = useAuthState();
  if (to.meta.requiresAuth && !authStore.isLogin) {
    return {
      path: "/login",
    };
  }
});

// ຖ້າ login ແລ້ວບໍ່ໃຫ້ກັບໄປຫນ້າ login ຈົນກວ່າ user ຊິ logout
router.beforeEach((to) => {
  const authStore = useAuthState();
  if (to.name === "login" && authStore.isLogin) {
    return {
      path: "/",
    };
  }
});

export default router;
