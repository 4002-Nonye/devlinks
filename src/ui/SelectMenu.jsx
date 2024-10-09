/* eslint-disable react/prop-types */
// COMPOUND COMPONENTS
import { createContext, useContext, useReducer } from 'react';

// 1 create context

const SelectMenuContext = createContext();
const initialState = {
  isOpen: false,
  selectedOption: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_MENU':
      return { ...state, isOpen: false };
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

// 2. Create parent component
function SelectMenu({ children }) {
  const [{ isOpen, selectedOption }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <SelectMenuContext.Provider
      value={{
        isOpen,
        dispatch,
        selectedOption,
      }}
    >
      {children}
    </SelectMenuContext.Provider>
  );
}

function Trigger({
  iconOpen = null,
  iconClose = null,
  containerClass,
  className = '',
  defaultValue, //mostly to control user option (esp when he wants it persisted// usecontext or localstorage)
}) {
  const { dispatch, isOpen, selectedOption } = useContext(SelectMenuContext);
  const toggleMenu = () => dispatch({ type: 'TOGGLE_MENU' });

  return (
    <button
      aria-expanded={isOpen}
      aria-controls="dropdown-menu"
      className={containerClass}
      onClick={toggleMenu}
    >
      <span className={`${className}`}>

        {defaultValue?.icon || ''}
        {selectedOption || defaultValue?.value || defaultValue}
      </span>

      <span>{isOpen ? iconClose : iconOpen}</span>
    </button>
  );
}

function DropDown({ children, className }) {
  const { isOpen } = useContext(SelectMenuContext);
  return isOpen ? (
    <div className={className} role="menu" id="dropdown-menu">
      {children}
    </div>
  ) : null;
}

function SelectOption({ value, children, className, onSelect }) {
  const { dispatch } = useContext(SelectMenuContext);
  const handleClick = () => {
    if (onSelect) onSelect();
    dispatch({ type: 'SELECT_OPTION', payload: value });

    dispatch({ type: 'CLOSE_MENU' });
  };

  return (
    <div
      role="menuitem"
      tabIndex={0}
      onClick={handleClick}
      className={className}
    >
      {children}
    </div>
  );
}

SelectMenu.Trigger = Trigger;
SelectMenu.DropDown = DropDown;
SelectMenu.SelectOption = SelectOption;

export default SelectMenu;
