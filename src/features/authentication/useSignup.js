import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { signup as signUpApi } from '../../services/apiAuth';

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success('Account successfully created!', navigate('/login'));
    },
    onError: (error) => toast.error(error.message),
  });

  return { signUp, isPending };
}
