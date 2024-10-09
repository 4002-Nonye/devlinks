import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { useForm } from 'react-hook-form';


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

    case 'EDIT_LINK_ITEM':
      return {
        ...state,
        linksArr: state.linksArr.map((link) =>
          link.id === action.payload.id
            ? { ...link, [action.payload.field]: action.payload.value }
            : link,
        ),
      };

    default:
      throw new Error('Unknown action type');
  }
}

const LinkProvider=({ children })=> {
  const [{ linksArr }, dispatch] = useReducer(reducer, initialState);
  const { register, handleSubmit, setValue, formState } = useForm();


  // add a new obj to array
  const handleAddLinkItem = (newObj) => {
    dispatch({ type: 'ADD_LINK_ITEM', payload: newObj });
    const updatedLinksArr = [...linksArr, newObj];
    
    // update form value after updating links Array
    setValue('links', updatedLinksArr);
  };

  // delete an obj from links Array
  const handleRemoveLinkItem = (id) => {
    dispatch({ type: 'REMOVE_LINK_ITEM', payload: id });

    const updatedLinksArr = linksArr.filter((link) => link.id !== id);

    // set form value after updating links Array
    setValue('links', updatedLinksArr);
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
    setValue('links', updatedLinksArr);
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
        formState
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




LinkProvider.propTypes = {
  children: PropTypes.node,
};
export { LinkProvider, useLinks };
