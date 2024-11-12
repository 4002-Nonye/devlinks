import { useLocation } from 'react-router-dom';

import { useLink } from '../features/links/useLink';
import { useProfile } from '../features/user/useProfile';
import PhoneContent from '../ui/PhoneContent';

function SharePreview() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const userId = searchParam.get('id');

  // get profile by id
  const { userProfileDetail, isLoading } = useProfile(userId);

  // get links by id
  const { userLink: userLinks } = useLink(userId);

  const data = {
    profileDetails: userProfileDetail,
    isLoading,
    userLinks,
  };

  return (
    <div className="relative">
      <div className="p-2 md:h-80 md:rounded-b-[2rem] md:bg-blue md:p-7" />

      <div className="absolute left-[50%] z-10 m-auto mt-6 flex h-[29rem] w-72 -translate-x-1/2 transform flex-col items-center rounded-lg bg-white-100 pb-6 pt-7 md:top-48 md:mt-0 md:shadow-lg">
        <PhoneContent purpose="preview" content={data} />
      </div>
    </div>
  );
}

export default SharePreview;
