export const useTouch = () => {
  const isTouch = ref(false);

  onMounted(() => {
    isTouch.value = "ontouchstart" in document.documentElement;
    document.body.classList.add(isTouch.value ? "touch" : "no-touch");
  });

  return { isTouch };
};
