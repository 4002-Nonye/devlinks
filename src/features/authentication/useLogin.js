import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { login as LoginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      // set user as cache
      queryClient.setQueriesData(['user'], user.user);
      navigate('/devlinks/links');
    },
    onError: (err) => toast.error(err.message),
  });

  return { login, isPending };
}
