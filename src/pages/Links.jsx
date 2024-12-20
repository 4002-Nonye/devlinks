import Skeleton from 'react-loading-skeleton';
import { v4 as uuidv4 } from 'uuid';

import { useLinks } from '../contexts/LinksContext';
import CreateEditLink from '../features/links/CreateEditLink';
import EmptyLink from '../features/links/EmptyLink';
import { useUpdateLink } from '../features/links/useUpdateLink';
import { useUserLinks } from '../features/links/useUserLinks';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Spinner from '../ui/Spinner';
import { validateUrl } from '../utils/helper';

function Links() {
  const { linksArr, handleAddLinkItem, handleValidateUrl } = useLinks();
  const { isLoading } = useUserLinks();
  const { updateLinks, isPending } = useUpdateLink();
  const { handleSubmit } = useLinks();
console.log(linksArr)
  const onSubmit = (data) => {
    // Validate each link before submission
    const hasErrors = linksArr.map((link) => {
      // check if each link is valid
      handleValidateUrl(link.link, link.id);
      return !validateUrl(link.link);
    });

    // If any errors were found, prevent submission
    if (hasErrors.includes(true)) return;
    const preparedData = {
      ...data,
      userLinks: linksArr, // Attach the array directly to prevent a stringified empty array
    };

    updateLinks(preparedData);
  };
  const onError = (err) => {
    console.log(err);
  };

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

      {isLoading && (
        <Skeleton
          height="400px"
          width="100%"
          style={{
            marginTop: '20px',
          }}
        />
      )}

      {!isLoading && (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {linksArr?.length === 0 ? <EmptyLink /> : <CreateEditLink />}

          <div className="mt-7 text-right">
            <Button variant="save" type="submit">
              {isPending ? <Spinner size="md" variant="#ffffff" /> : 'Save'}
            </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default Links;
