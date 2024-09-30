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
      queryClient.setQueriesData(['user'],user.user);
      console.log(user.user);
      navigate('/devlinks');
    },
    onError: (err) => toast.error(err.message),
  });

  return { login, isPending };
}
