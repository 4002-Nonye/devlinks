import EmptyLink from '../features/links/EmptyLink';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

function Links() {
  return (
    <div className="bg-white-200 p-5 h-full rounded-md flex flex-col">
      <Heading purpose="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>

      <Button customClass="border-2 border-blue w-full p-3 rounded-lg text-blue font-semibold duration-500  hover:bg-blue hover:bg-opacity-15 ">
        + Add new link
      </Button>

      <EmptyLink />

      <div className="text-right">
        <Button variant="save">Save</Button>
      </div>
    </div>
  );
}

export default Links;
