import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateLinks as updateLinksApi } from '../../services/apiLinks';

export function useUpdateLink() {
  const queryClient = useQueryClient();

  const { mutate: updateLinks, isPending } = useMutation({
    mutationFn: updateLinksApi,
    onSuccess: () => {
      toast.success('changes made successfully');
      queryClient.invalidateQueries({ queryKey: ['links'] });
    },
    onError: (err) => console.log(err.message),
  });

  return { updateLinks, isPending };
}
