import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { useForm } from 'react-hook-form';

import { validateUrl } from '../utils/helper';

const LinksContext = createContext();

const initialState = {
  linksArr: [],
  urlError: {}, // Store errors by link ID
};

function reducer(state, action) {
  switch (action.type) {
    case 'GET_LINKS':
      return {
        ...state,
        linksArr: action.payload,
      };
    case 'ADD_LINK_ITEM':
      return { ...state, linksArr: [...state.linksArr, action.payload] };

    case 'REMOVE_LINK_ITEM': {
      const filteredLinks = state.linksArr.filter(
        (link) => link.id !== action.payload,
      );

      return { ...state, linksArr: filteredLinks };
    }

    case 'EDIT_LINK_ITEM':
      return {
        ...state,
        linksArr: state.linksArr.map((link) =>
          link.id === action.payload.id
            ? { ...link, [action.payload.field]: action.payload.value }
            : link,
        ),
      };

    case 'VALIDATE_URL':
      return {
        ...state,
        urlError: {
          ...state.urlError,
          [action.payload.id]: !validateUrl(action.payload.url)
            ? action.payload.message // Set error message if URL is invalid
            : '', // Clear error if URL is valid
        },
      };

    default:
      throw new Error('Unknown action type');
  }
}

const LinkProvider = ({ children }) => {
  const [{ linksArr, urlError }, dispatch] = useReducer(reducer, initialState);
  const { register, handleSubmit, setValue, formState } = useForm();

  // add a new obj to array
  const handleAddLinkItem = (newObj) => {
    dispatch({ type: 'ADD_LINK_ITEM', payload: newObj });
    const updatedLinksArr = [...linksArr, newObj];

    // update form value after updating links Array
    setValue('userLinks', updatedLinksArr);
  };

  // delete an obj from links Array
  const handleRemoveLinkItem = (id) => {
    dispatch({ type: 'REMOVE_LINK_ITEM', payload: id });

    const updatedLinksArr = linksArr.filter((link) => link.id !== id);

    // set form value after updating links Array
    setValue('userLinks', updatedLinksArr);
  };

  // edit an obj value from link array
  const handleEditLinkItem = (id, field, value) => {
    dispatch({ type: 'EDIT_LINK_ITEM', payload: { id, field, value } });

    const updatedLinksArr = linksArr.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          [field]: value,
        };
      } else return link;
    });

    // set form value after updating links Array
    setValue('userLinks', updatedLinksArr);
  };

  const handleGetLinks = (links) => {
    dispatch({ type: 'GET_LINKS', payload: links });
  };
  const handleValidateUrl = (url, id) => {
    dispatch({
      type: 'VALIDATE_URL',
      payload: { url, id, message: 'Please provide a valid url' },
    });
  };

  return (
    <LinksContext.Provider
      value={{
        linksArr,
        handleAddLinkItem,
        handleRemoveLinkItem,
        register,
        handleEditLinkItem,
        handleSubmit,
        formState,
        handleGetLinks,
        urlError,
        handleValidateUrl,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};

const useLinks = () => {
  const context = useContext(LinksContext);
  if (context === undefined)
    throw new Error('LinksContext cannot be used outside LinksProvider');
  return context;
};

LinkProvider.propTypes = {
  children: PropTypes.node,
};
export { LinkProvider, useLinks };
