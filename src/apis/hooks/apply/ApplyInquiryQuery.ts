import { ApplyInquiryAPI } from '@gdsc/apis/hooks/apply/ApplyInquiryAPI';

import { useQuery } from '@tanstack/react-query';

export const ApplyInquiryQuery = (name: string, studentNumber: string) => {
  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['getApplyData', name, studentNumber],
    queryFn: () => ApplyInquiryAPI(name, studentNumber),
    enabled: false,
  });

  return { data, isLoading, isFetching, isError, error, refetch };
};