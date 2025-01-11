import process from 'node:process';
import type { TCharacter, TResponse } from './types/characters.ts';
import fetcher from './shared/fetcher.ts';

const { MEDIA_URL } = process.env;

async function getCharacterRoutes() {
  const { data } = await (async () => {
    const response = await fetcher.get<TResponse<TCharacter>>('/characters');
    if (!response.data) return { data: [] };
    return response;
  })();
  return data.map(item => `/character/${item.id}`);
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      mediaUrl: MEDIA_URL,
    },
  },
  app: {
    baseURL: '/',
    head: {
      // meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      title: 'Monkey Wrench characters',
      link: [{ rel: 'icon', type: 'image/png', href: './favicon.png' }],
    },
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) return;

      let slugs = await getCharacterRoutes();
      nitroConfig.prerender.routes.push(...slugs);
      return;
    },
  },
});
