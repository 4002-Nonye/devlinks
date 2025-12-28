import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/login');
    },
    [navigate, isAuthenticated, isPending],
  );

  // 3. while loading,show a spinner
  if (isPending)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner variant="hsl(252,100%,62%)" />
      </div>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
