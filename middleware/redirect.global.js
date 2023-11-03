export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.name) {
    return navigateTo("/");
  }
});
