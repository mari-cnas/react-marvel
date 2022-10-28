export type ThumbnailType = { path: string; extension: string };

export type ComicType = {
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailType;
  issueNumber: number;
  format: string;
};
