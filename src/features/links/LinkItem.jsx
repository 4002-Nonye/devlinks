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
    <div className="mt-8 rounded-md bg-white-200 p-2">
      <div className="flex items-center justify-between">
        <h3 className="flex text-sm font-semibold text-brown-200">
          <Ham />
          &nbsp; Link <span className="font-extrabold">#</span>
          {index + 1}
        </h3>

        <p
          className="cursor-pointer text-sm font-semibold text-brown-200"
          onClick={() => handleRemoveLinkItem(link.id)}
        >
          Remove
        </p>
      </div>

      <>
        <div className="relative my-4 flex w-full flex-col">
          <div className="labelClass mb-2">Platform</div>
          {/* dropdown menu */}
          <CustomSelect link={link} />
        </div>

        {/* link input */}
        <div className="relative flex flex-col">
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
          <FaLink className="absolute left-2 top-12 text-sm text-brown-200" />

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
