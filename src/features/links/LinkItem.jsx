import PropTypes from 'prop-types';
import { useState } from 'react';
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
  const { handleRemoveLinkItem, handleEditLinkItem } = useLinks();
  const [urlError, setUrlError] = useState(null);

  const validateURL = (url) => {
    const urlPattern = new RegExp(
      /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
    );
    return urlPattern.test(url);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    // Validate the URL
    if (!validateURL(value)) {
      setUrlError('Please enter a valid URL');
    } else {
      setUrlError(null);
    }

    // Update link item if valid
    handleEditLinkItem(link.id, 'link', value);
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
            className={`input px-7 ${urlError ? 'border-red-500' : ''}`}
            placeholder="e.g https://www.github.com/johnappleseed"
            onChange={handleChange}
           
          />
          <FaLink className="absolute top-12 left-2 text-brown-200 text-sm" />

          {/* Display URL error */}
          {urlError && (
            <Error
              errMessage={urlError}
              position=" absolute right-0 top-[2.6rem]"
            />
          )}
        </div>
      </>
    </div>
  );
}

export default LinkItem;
