import { apiPost } from './api.ts';

interface PostResponse {
  id: string;
  title: string;
  body: string;
}

export const posts = async (): Promise<PostResponse> => {
  const response = await apiPost.get<PostResponse>('/posts');
  return response.data;
};
