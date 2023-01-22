export type ThumbnailType = { path: string; extension: string };

export type ComicItemType = {
  resourceURI: string;
  name: string;
};
export type CharacterType = {
  id: number;
  name: string;
  description: string;
  thumbnail: ThumbnailType;
  comics: {
    available: number;
    items: ComicItemType[];
  };
  series: {
    available: number;
    items: ComicItemType[];
  };
};
