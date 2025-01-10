type TImage = {
  id: number;
  width: number;
  height: number;
  url: string;
};

type TDict = {
  id: number;
  title: string;
};

export type TCharacter = {
  id: number;
  name: string;
  desc: string;
  cover: TImage & {
    formats: {
      small: TImage;
      medium: TImage;
      thumbnail: TImage;
    };
  };
  gender: TDict;
  species: TDict;
};

export type TResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
