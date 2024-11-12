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
      <SelectMenu.DropDown className="absolute z-[1000] mt-24 h-96 w-[inherit] overflow-scroll rounded-md bg-white-200 p-2 shadow-custom">
        {options.map((option) => (
          <SelectMenu.SelectOption
            key={option.platform}
            value={option.platform}
            onSelect={() =>
              handleEditLinkItem(link.id, 'platform', option.platform)
            }
            className="flex cursor-pointer items-center gap-2 border-b-2 border-brown-300 border-opacity-15 py-3 font-normal text-brown-200 transition duration-500 last:border-none hover:text-blue"
          >
            <span>{option.icon}</span> {option.platform}
          </SelectMenu.SelectOption>
        ))}
      </SelectMenu.DropDown>
    </SelectMenu>
  );
}

export default CustomSelect;
