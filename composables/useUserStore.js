import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    tag: "",
    name: "",
    sessionToken: "",
    socketId: "",
    token: "",
  }),
});
