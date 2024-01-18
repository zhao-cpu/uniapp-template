import { request } from '@/utils/request';

export const getUserApi = async () => {
  const res = await request<ApiUser.UserInfo[]>({
    url: '/users',
    method: 'GET',
  });
  return res;
};
