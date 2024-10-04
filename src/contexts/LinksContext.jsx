import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

LinkProvider.propTypes = {
  children: PropTypes.node,
};

const LinksContext = createContext();

const initialState = {
  linksArr: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_LINK_ITEM':
      return { ...state, linksArr: [...state.linksArr, action.payload] };

    case 'REMOVE_LINK_ITEM': {

      const filteredLinks = state.linksArr.filter(
        (link) => link.id !== action.payload,
      );
     
      return { ...state, linksArr: filteredLinks };
    }

    default:
      throw new Error('Unknown action type');
  }
}

function LinkProvider({ children }) {
  const [{ linksArr }, dispatch] = useReducer(reducer, initialState);

  const handleAddLinkItem = (newObj) =>
    dispatch({ type: 'ADD_LINK_ITEM', payload: newObj });

  const handleRemoveLinkItem = (id) =>
    dispatch({ type: 'REMOVE_LINK_ITEM', payload: id });

  return (
    <LinksContext.Provider
      value={{
        linksArr,
        handleAddLinkItem,
        handleRemoveLinkItem,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}

const useLinks = () => {
  const context = useContext(LinksContext);
  if (context === undefined)
    throw new Error('LinksContext cannot be used outside LinksProvider');
  return context;
};

export { useLinks, LinkProvider };
