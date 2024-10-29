import { useQuery } from '@tanstack/react-query';

import {  getLinkById} from '../../services/apiLinks';

export function useLink(id) {
  const {
    data: userLink,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['link'],
    queryFn:()=> getLinkById(id),
  });

  return { userLink, isLoading, error };
}
