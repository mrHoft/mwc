// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';

const { MEDIA_URL } = process.env;

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      mediaUrl: MEDIA_URL,
    },
  },
  app: {
    head: {
      // meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      title: 'Monkey Wrench characters',
      link: [{ rel: 'icon', type: 'image/png', href: './favicon.png' }],
    },
  },
});
