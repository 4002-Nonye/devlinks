import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createElement } from 'react';
import toast from 'react-hot-toast';

import save from '../../assets/save.svg';
import { updateLinks as updateLinksApi } from '../../services/apiLinks';

export function useUpdateLink() {
  const queryClient = useQueryClient();

  const { mutate: updateLinks, isPending } = useMutation({
    mutationFn: updateLinksApi,
    onSuccess: () => {
      toast.success('Your changes have been successfully saved!', {
        // Using createElement instead of JSX
        icon: createElement('img', {
          src: save,
          alt: 'Save Icon',
          style: { width: '24px', marginLeft: '8px', marginTop: '4px' },
        }),
      });
      queryClient.invalidateQueries({ queryKey: ['links'] });
    },
    onError: (err) => console.log(err.message),
  });

  return { updateLinks, isPending };
}
