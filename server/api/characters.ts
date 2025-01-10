import type { TCharacter, TResponse } from '~/types/characters';
import fetcher from '~/shared/fetcher';

export default defineEventHandler(async () => {
  const response = await fetcher.get<TResponse<TCharacter>>('/characters?populate=*');

  if (response.error) {
    console.log(response.error);
    return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
  }

  return response;
});
