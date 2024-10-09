import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { editProfileDetails as editProfileDetailsApi } from '../../services/apiProfile';

export const useEditProfile = () => {
    const queryClient =useQueryClient()
  const { mutate: editProfileDetails, isPending } = useMutation({
    mutationFn: (obj) => editProfileDetailsApi(obj),
    onSuccess: () => {
      toast.success('changes made');
      queryClient.invalidateQueries({queryKey:['profile']})
    },
    onError:(err)=>toast.error(err.message)
  });
  return { editProfileDetails, isPending };
};
