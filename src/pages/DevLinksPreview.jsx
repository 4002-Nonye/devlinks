import { Link } from 'react-router-dom';

import avatar from '../assets/justin.jpg';
import { useLinks } from '../contexts/LinksContext';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

function DevLinksPreview() {
  // const { linksArr } = useLinks();
  // console.log(linksArr);
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

          <Button variant="share">Share Link</Button>
        </div>
      </div>

      <div className="bg-white-100 md:shadow-lg rounded-lg h-[31rem] mt-6 md:mt-0  w-[22rem]  m-auto absolute z-10 md:top-48 left-[50%] transform -translate-x-1/2 items-center pt-7 flex flex-col">
        <Avatar avatar={avatar} />

        <h3 className="py-3 font-bold text-2xl">Ben Wright</h3>
        <p className="font-light text-sm">ben@example.com</p>
      </div>
    </div>
  );
}

export default DevLinksPreview;
