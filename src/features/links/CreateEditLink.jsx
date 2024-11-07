import { useLinks } from '../../contexts/LinksContext';
import LinkItem from './LinkItem';

function CreateEditLink() {
  const { linksArr = [], register } = useLinks();

  return (
    <div className="portal">
      <div className="mt-2 ">
        {linksArr?.map((link, index) => (
          <LinkItem key={link.id} index={index} link={link} />
        ))}

        {/* used as a store to send a single array of links to backend */}
        <input
          type="hidden"
          className="input"
          value={JSON.stringify(linksArr)}
          {...register('userLinks')}
        />
      </div>
    </div>
  );
}

export default CreateEditLink;
