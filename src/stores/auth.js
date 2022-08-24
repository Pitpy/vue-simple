import { defineStore } from "pinia";

export const useAuthState = defineStore({
  id: "auth",
  state: () => ({
    isLogin: sessionStorage.getItem("isLogin") || false,
    user: sessionStorage.getItem("user") || "",
  }),
});
