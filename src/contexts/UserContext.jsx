import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  //   const [{ user }] = useReducer(reducer, initialState);
  const { register, handleSubmit, formState, reset,watch } = useForm();

  return (
    <UserContext.Provider
      value={{
        reset,
        handleSubmit,
        register,
        formState,
        watch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserProfile = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserContext cannot be used outside UserProvider ');
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { useUserProfile, UserProvider };
