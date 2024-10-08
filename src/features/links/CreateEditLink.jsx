import { useLinks } from '../../contexts/LinksContext';
import Button from '../../ui/Button';
import LinkItem from './LinkItem';

function CreateEditLink() {
  const { linksArr, register, handleSubmit } = useLinks();

  const onSubmit = (data) => {
    console.log(data);
   

  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-2 scroll h-[20rem]  overflow-scroll"
      >
        {linksArr.map((link, index) => (
          <LinkItem key={link.id} index={index} link={link} />
        ))}


{/* used as a store to send a single array of links to backend */}
        <input
          type="hidden"
          className="input"
          value={JSON.stringify(linksArr)}
          {...register('links')}
        />
      </div>

      <div className="text-right mt-7">
        <Button variant="save">Save</Button>
      </div>
    </form>
  );
}

export default CreateEditLink;
