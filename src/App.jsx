import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import DevLinksPreview from './pages/DevLinksPreview';
import DevLinks from './pages/Devlinks';
import Links from './pages/Links';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const customToastOptions = {
  success: {
    style: {
      backgroundColor: 'hsl(0,0%,20%)',
      color: 'hsl(0,0%,85%)',
      minWidth: '400px',
    },
  },
};

const customContainerStyle = {
  top: 'unset',
  bottom: 100,
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="login" />} />
            <Route path="devlinks" element={<DevLinks />}>
              <Route path="links" element={<Links />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="preview" element={<DevLinksPreview />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        containerStyle={customContainerStyle}
        toastOptions={customToastOptions}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
