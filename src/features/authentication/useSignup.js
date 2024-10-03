import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signUpApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        'Account successfully created! Check your email account to verify!',
      );
    },
    onError: (error) => toast.error(error.message),
  });

  return { signUp, isPending };
}
