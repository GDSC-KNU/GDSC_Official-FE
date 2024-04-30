import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@gdsc/hooks/queries/Http';

import { SignupAPI } from '@gdsc/apis/signup/SignupAPI';

export const SignupQuery = () => {

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: SignupAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signUp'] });
    },
  });

  return { mutate, isPending, isError, error };
};
