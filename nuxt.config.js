export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [/*"@nuxtjs/i18n",*/ "@pinia/nuxt"],
  css: ["~/assets/scss/index.scss", "~/assets/scss/fonts.scss"],
  /**
     *   i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
      },
      {
        code: "de",
        file: "de.js",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "lang",
    strategy: "no_prefix",
  },
     */
  hooks: {
    "vue-renderer:ssr:prepareContext"(context) {
      context.nuxt.error = ({ statusCode }) => {
        console.log(statusCode);
        if (statusCode === 404) {
          context.redirect("/");
        }
      };
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/mixins.scss";',
        },
      },
    },
  },
});
