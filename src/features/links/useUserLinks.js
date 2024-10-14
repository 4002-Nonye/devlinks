import { useQuery } from '@tanstack/react-query';

import { getLinks } from '../../services/apiLinks';

export function useUserLinks() {
  const {
    data: userLinks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  });

  return { userLinks, isLoading, error };
}
