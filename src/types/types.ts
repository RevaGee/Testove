export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostResponse {
  data: Post[];
}
export type PostResponse = Post[];
