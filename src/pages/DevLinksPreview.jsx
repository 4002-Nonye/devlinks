import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { useShareLink } from '../features/links/useShareLink';
import { useUserLinks } from '../features/links/useUserLinks';
import { useProfiles } from '../features/user/useProfiles';
import Button from '../ui/Button';
import PhoneContent from '../ui/PhoneContent';

function DevLinksPreview() {
  const { profileDetails, isLoading } = useProfiles();
  const { userLinks } = useUserLinks();
  const { handleCopyToClipBoard } = useShareLink();

  const data = {
    profileDetails,
    isLoading,
    userLinks,
  };

  const linkToShare = `https://devlinks-gules.vercel.app/links/preview/${profileDetails?.[0]?.firstName}?id=${profileDetails?.[0]?.id}`;

  return (
    <div className="relative">
      <div className="p-2 md:h-80 md:rounded-b-[2rem] md:bg-blue md:p-7">
        <div className="flex items-center justify-between rounded-md bg-white-100 p-3">
          <Link
            to="/devlinks/links"
            className="w-[8rem] rounded-md border-2 border-blue py-3 text-center font-medium text-blue"
          >
            Back to Editor
          </Link>

          <Button
            variant="share"
            onClick={() => {
              if (!profileDetails?.[0]?.firstName) {
                toast.error(
                  'Please set your name in the profile to share your link.',
                );
                return;
              }

              handleCopyToClipBoard(linkToShare);
            }}
          >
            Share Link
          </Button>
        </div>
      </div>

      <div className="absolute left-[50%] z-10 m-auto mt-6 flex h-[30rem] w-72 -translate-x-1/2 transform flex-col items-center rounded-lg bg-white-100 pb-6 pt-7 md:top-48 md:mt-0 md:shadow-lg">
        <PhoneContent content={data} purpose="preview" />
      </div>
    </div>
  );
}

export default DevLinksPreview;
