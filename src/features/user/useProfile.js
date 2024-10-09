import { useQuery } from '@tanstack/react-query';

import { getProfileDetails } from '../../services/apiProfile';

export function useProfile() {
  const {
    isLoading,
    data: profileDetails,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileDetails,
  });

  return { error, isLoading, profileDetails };
}
