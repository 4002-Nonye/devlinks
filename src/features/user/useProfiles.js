import { useQuery } from '@tanstack/react-query';

import { getProfileDetails } from '../../services/apiProfile';

export function useProfiles() {
  const {
    isLoading,
    data: profileDetails,
    error,
  } = useQuery({
    queryKey: ['profiles'],
    queryFn: getProfileDetails,
  });

  return { error, isLoading, profileDetails };
}
