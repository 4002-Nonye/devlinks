import { Link } from 'react-router-dom';

import { useShareLink } from '../features/links/useShareLink';
import Button from '../ui/Button';
import PhoneContent from '../ui/PhoneContent';
import { useProfile } from '../features/user/useProfile';

function DevLinksPreview() {
 const {profileDetails}=useProfile()
  console.log(profileDetails[0])
  const {firstName,lastName}=profileDetails[0]
  const userId = 123;
  const LinkToShare = `http://localhost:5173/links/preview/${firstName}${lastName}`;

const {handleCopyToClipBoard} = useShareLink();
  return (
    <div className="relative ">
      <div className="  md:bg-blue md:h-80 md:rounded-b-[2rem] md:p-7 p-2 ">
        <div className="bg-white-100 p-3 rounded-md flex justify-between items-center">
          <Link
            to="/devlinks/links"
            className="border-2 border-blue text-blue font-medium rounded-md text-center py-3 w-[8rem]"
          >
            Back to Editor
          </Link>

          <Button
            variant="share"
            onClick={() => handleCopyToClipBoard(LinkToShare)}
          >
            Share Link
          </Button>
        </div>
      </div>

      <div className="bg-white-100 md:shadow-lg rounded-lg h-[29rem] mt-6 md:mt-0 pb-6 w-72  m-auto absolute z-10 md:top-48 left-[50%] transform -translate-x-1/2 items-center pt-7 flex flex-col">
        <PhoneContent purpose="preview" />
      </div>
    </div>
  );
}

export default DevLinksPreview;
