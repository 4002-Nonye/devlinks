import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

import { useLinks } from '../../contexts/LinksContext';
import CustomSelect from '../../ui/CustomSelect';
import Error from '../../ui/Error';
import Ham from '../../ui/Ham';

LinkItem.propTypes = {
  index: PropTypes.number,
  link: PropTypes.object,
};

function LinkItem({ index, link }) {
  const {
    handleRemoveLinkItem,
    handleEditLinkItem,
    handleValidateUrl,
    urlError,
  } = useLinks();

  const handleChange = (e) => {
    const value = e.target.value;
    handleEditLinkItem(link.id, 'link', value);
  };

  const handleValidation = (e) => {
    const value = e.target.value;
    handleValidateUrl(value, link.id);
  };

  return (
    <div className="mt-8 bg-white-200 p-2 rounded-md ">
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
        <div className="flex flex-col my-4 relative w-full">
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
            className={`input px-7 ${urlError[link.id] ? 'border-red' : ''}`}
            placeholder="e.g https://www.github.com/johnappleseed"
            onChange={(e) => {
              handleValidation(e);
              handleChange(e);
            }}
          />
          <FaLink className="absolute top-12 left-2 text-brown-200 text-sm" />

          {/* Display URL error */}
          {urlError[link.id] && (
            <Error
              errMessage={urlError[link.id]}
              position=" absolute right-2 top-[2.6rem]"
            />
          )}
        </div>
      </>
    </div>
  );
}

export default LinkItem;
