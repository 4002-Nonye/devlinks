import { v4 as uuidv4 } from 'uuid';

import { useLinks } from '../contexts/LinksContext';
import CreateEditLink from '../features/links/CreateEditLink';
import EmptyLink from '../features/links/EmptyLink';
import { useUpdateLink } from '../features/links/useUpdateLink';
import { useUserLinks } from '../features/links/useUserLinks';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

function Links() {
  const { linksArr, handleAddLinkItem } = useLinks();
  const { isLoading } = useUserLinks();
  const { updateLinks } = useUpdateLink();
  const { handleSubmit } = useLinks();

  const onSubmit = (data) => {
    updateLinks(data);
  };

  const onError = (err) => {
    console.log(err);
  };

  if (isLoading) return 'loading';

  // fresh link and platform to be added
  const newObj = {
    id: uuidv4(),
    platform: 'Github',
    link: '',
  };

  return (
    <>
      <Heading purpose="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>

      {/* to add new link obj to links array */}
      <Button
        onClick={() => handleAddLinkItem(newObj)}
        customClass="border-2 border-blue w-full p-3 rounded-lg text-blue font-semibold duration-500  hover:bg-blue hover:bg-opacity-15 "
      >
        + Add new link
      </Button>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {linksArr?.length === 0 ? <EmptyLink /> : <CreateEditLink />}

        <div className="text-right mt-7">
          <Button variant="save" type="submit">
            Save
          </Button>
        </div>
      </form>
    </>
  );
}

export default Links;
