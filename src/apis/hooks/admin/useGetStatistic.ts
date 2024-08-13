import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery } from '@tanstack/react-query';

export interface statisticInterface {
  total: number;
  openCount: number;
  notOpenCount: number;
  approvedCount: number;
  rejectedCount: number;
}

const getStatisticPath = () => '/api/admin/application/statistic';

const statisticQueryKey = [getStatisticPath()];

export const getStatistic = async (): Promise<statisticInterface> => {
  const response =
    await fetchInstance.get<statisticInterface>(getStatisticPath());
  return response.data;
};

export const useGetStatistic = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<statisticInterface, Error>({
    queryKey: [statisticQueryKey],
    queryFn: getStatistic,
    enabled: !!accessToken,
  });
};