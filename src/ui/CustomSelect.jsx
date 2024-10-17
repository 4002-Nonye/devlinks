import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';

import { useLinks } from '../contexts/LinksContext';
import options from '../data/Options';
import { getPlatformDetails } from '../utils/helper';
import SelectMenu from './SelectMenu';

CustomSelect.propTypes = {
  link: PropTypes.object,
};

function CustomSelect({ link }) {
  const { handleEditLinkItem } = useLinks();
  const { icon } = getPlatformDetails(link.platform, <TbBrandGithubFilled />);

  return (
    <SelectMenu>
      <SelectMenu.Trigger
        iconOpen={<FaChevronDown />}
        iconClose={<FaChevronUp />}
        containerClass="flex justify-between cursor-pointer input  px-2  items-center"
        className="inline-flex items-center gap-2 text-brown-200"
        // getting value anytime my platform changes
        defaultValue={{
          icon,
          value: link.platform,
        }}
      />

      <SelectMenu.DropDown className="top-10 w-full bg-white-200 p-2 rounded-md absolute h-72  overflow-scroll shadow-lg z-10">
        {options.map((option) => (
          <SelectMenu.SelectOption
            key={option.platform}
            value={option.platform}
            // change platform on links Array based on option clicked
            onSelect={() =>
              handleEditLinkItem(link.id, 'platform', option.platform)
            }
            className=" flex items-center gap-2 text-brown-200  cursor-pointer hover:text-blue transition duration-500 font-normal border-b-2 border-opacity-15 py-3 border-brown-300"
          >
            <span>{option.icon}</span> {option.platform}
          </SelectMenu.SelectOption>
        ))}
      </SelectMenu.DropDown>
    </SelectMenu>
  );
}

export default CustomSelect;
