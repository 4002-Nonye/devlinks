import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { useLinks } from '../contexts/LinksContext';
import options from '../data/Options';
import SelectMenu from './SelectMenu';

CustomSelect.propTypes = {
  link: PropTypes.object,
};

function CustomSelect({ link }) {
  const { handleEditLinkItem } = useLinks();

  return (
    <SelectMenu>
      <SelectMenu.Trigger
        iconOpen={<FaChevronDown />}
        iconClose={<FaChevronUp />}
        className="flex justify-between cursor-pointer input px-4 items-center"
      />

      <SelectMenu.DropDown className="top-20 w-full bg-white-200 p-2 rounded-md absolute h-72 z-10 overflow-scroll shadow-lg">
        {options.map((option) => (
          <SelectMenu.SelectOption
            key={option.siteName}
            value={option.siteName}
            icon={option.icon}
            onSelect={() =>
              handleEditLinkItem(link.id, 'name', option.siteName)
            }
            className=" flex items-center gap-2 text-brown-200 text-[1rem]  cursor-pointer hover:text-blue transition duration-500 font-normal border-b-2 border-opacity-15 py-3 border-brown-300"
          >
            <span>{option.icon}</span> {option.siteName}
          </SelectMenu.SelectOption>
        ))}
      </SelectMenu.DropDown>
    </SelectMenu>
  );
}

export default CustomSelect;
