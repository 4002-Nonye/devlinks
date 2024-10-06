
import { v4 as uuidv4 } from 'uuid';

import { useLinks } from '../contexts/LinksContext';
import EmptyLink from '../features/links/EmptyLink';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import LinkItem from '../ui/LinkItem';

function Links() {
  const { linksArr, handleAddLinkItem } = useLinks();


  // To add fresh link
  const newObj = {
    id: uuidv4(),
    name: 'Github',
    link: 'https://google.com',
   
  };

  return (
    <>
      <Heading purpose="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>

      <Button
        onClick={() => handleAddLinkItem(newObj)}
        customClass="border-2 border-blue w-full p-3 rounded-lg text-blue font-semibold duration-500  hover:bg-blue hover:bg-opacity-15 "
      >
        + Add new link
      </Button>

      {linksArr.length === 0 ? (
        <EmptyLink />
      ) : (
        <div className="scroll h-[20rem] mt-2 overflow-scroll">
          {linksArr.map((link, index) => (
            <LinkItem key={link.id} index={index } linkId={link.id} />
          ))}
        </div>
      )}

      <div className="text-right mt-7">
        <Button variant="save">Save</Button>
      </div>
    </>
  );
}

export default Links;
