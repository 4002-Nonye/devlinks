import { v4 as uuidv4 } from 'uuid';

import { useLinks } from '../contexts/LinksContext';
import CreateEditLink from '../features/links/CreateEditLink';
import EmptyLink from '../features/links/EmptyLink';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

function Links() {
  const { linksArr, handleAddLinkItem } = useLinks();
 

  // To add fresh link
  const newObj = {
    id: uuidv4(),
    name: 'Github',
    link: '',
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

      {linksArr.length === 0 ? <EmptyLink /> : <CreateEditLink />}

     
    </>
  );
}

export default Links;
