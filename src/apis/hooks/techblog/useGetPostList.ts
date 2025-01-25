import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { blogPostListInterface } from '@gdg/types/UserInterface';

const getPostListPath = () => '/api/post';

export const getPostList = async (
  category: string,
  page: number,
  size: number
): Promise<blogPostListInterface> => {
  const response = await fetchInstance.get(
    `${getPostListPath()}?category=${category}&page=${page}&size=${size}`
  );
  return response.data;
};
