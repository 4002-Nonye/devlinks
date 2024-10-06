/* eslint-disable react/prop-types */
// COMPOUND COMPONENTS
import {   createContext, useContext, useState } from 'react';

// 1 create context

const SelectMenuContext = createContext();

// 2. Create parent component
function SelectMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Github');

  return (
    <SelectMenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </SelectMenuContext.Provider>
  );
}

function Trigger({ iconOpen, iconClose ,className}) {
  const { setIsOpen, selectedOption, isOpen } = useContext(SelectMenuContext);
  return (
    <div
      className={className}
      onClick={() => setIsOpen((open) => !open)}
    >
      {selectedOption}
      <span>{isOpen ? iconClose : iconOpen}</span>
    </div>
  );
}

function DropDown({ children,className }) {
  const { isOpen } = useContext(SelectMenuContext);
  return isOpen ? <div className={className}>{children}</div> : null;
}

function SelectOption({ value, children,className }) {
  const { setSelectedOption, setIsOpen } = useContext(SelectMenuContext);
  const handleClick = () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return <div onClick={handleClick} className={className}>{children}</div>;
}

SelectMenu.Trigger = Trigger;
SelectMenu.DropDown = DropDown;
SelectMenu.SelectOption = SelectOption;

export default SelectMenu;
