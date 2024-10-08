/* eslint-disable react/prop-types */
// COMPOUND COMPONENTS
import { createContext, useContext, useReducer } from 'react';

// 1 create context

const SelectMenuContext = createContext();
const initialState = {
  isOpen: false,
  selectedOption: 'Github',
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

function Trigger({ iconOpen = {}, iconClose = {}, className }) {
  const { dispatch, isOpen, selectedOption } = useContext(SelectMenuContext);

  return (
    <button
      aria-expanded={isOpen}
      aria-controls="dropdown-menu"
      className={className}
      onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
    >
      <span className="inline-flex items-center gap-2">{selectedOption}</span>

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
