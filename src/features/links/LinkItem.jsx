import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

import { useLinks } from '../../contexts/LinksContext';
import CustomSelect from '../../ui/CustomSelect';
import Ham from '../../ui/Ham';

LinkItem.propTypes = {
  index: PropTypes.number,
  link: PropTypes.object,
};

function LinkItem({ index, link }) {
  const { handleRemoveLinkItem, handleEditLinkItem } = useLinks();

  return (
    <div className="mt-8 bg-white-200 p-2 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="text-brown-200 font-semibold text-sm flex ">
          <Ham />
          &nbsp; Link <span className="font-extrabold">#</span>
          {index + 1}
        </h3>

        <p
          className="text-brown-200 font-semibold text-sm cursor-pointer"
          onClick={() => handleRemoveLinkItem(link.id)}
        >
          Remove
        </p>
      </div>

      <>
        <div className="flex flex-col my-4 relative">
          <div className="labelClass mb-2">Platform</div>
          {/* dropdown menu */}
          <CustomSelect link={link} />
        </div>

        {/* link input */}
        <div className="flex flex-col relative">
          <label htmlFor={`link-${link.id}`} className="labelClass mb-2">
            Link
          </label>
          <input
            value={link.link}
            id={`link-${link.id}`}
            type="text"
            className="input px-7"
            placeholder="e.g https://www.github.com/johnappleseed"
            onChange={(e) => {
              handleEditLinkItem(link.id, 'link', e.target.value);
            }}
          />
          <FaLink className="absolute top-12 left-2 text-brown-200 text-sm" />

          {/* <Error position="absolute top-11 right-2" errMessage={linkError[link.id]} /> */}
        </div>
      </>
    </div>
  );
}

export default LinkItem;
