import { useQuery } from '@tanstack/react-query';

import { getProfileDetailsbyId } from '../../services/apiProfile';

export function useProfile(id) {
  const {
    data: userProfileDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileDetailsbyId(id),
  });

  return { userProfileDetail, isLoading, error };
}
