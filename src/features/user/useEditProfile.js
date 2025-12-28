import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createElement } from 'react';
import toast from 'react-hot-toast';

import save from '../../assets/save.svg';
import { editProfileDetails as editProfileDetailsApi } from '../../services/apiProfile';

export const useEditProfile = () => {
  const queryClient = useQueryClient();
  const { mutate: editProfileDetails, isPending } = useMutation({
    mutationFn: (obj) => editProfileDetailsApi(obj),
    onSuccess: () => {
      toast.success('Your changes have been successfully saved!', {
        // Using createElement instead of JSX
        icon: createElement('img', {
          src: save,
          alt: 'Save Icon',
          style: { width: '24px', marginRight: '8px' },
        }),
      });
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editProfileDetails, isPending };
};
