import PropTypes from 'prop-types';

import { useLinks } from '../contexts/LinksContext';
import CustomSelect from './CustomSelect';
import Ham from './Ham';

LinkItem.propTypes = {
  index: PropTypes.number,
  linkId: PropTypes.string,
};


function LinkItem({ index, linkId }) {
  const { handleRemoveLinkItem } = useLinks();

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
          onClick={() => handleRemoveLinkItem(linkId)}
        >
          Remove
        </p>
      </div>

      <div>
        <div className="flex flex-col my-4">
          <label
            htmlFor="platform"
            className="labelClass mb-2"
          >
            Platform
          </label>
          <CustomSelect />
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor="link"
            className="labelClass mb-2"
          >
            Link
          </label>
          <input
            type="text"
            className="input px-4"
            placeholder="e.g https//www.github.com/johnappleseed"
          />
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
