import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import DevLinks from './pages/DevLinks';
import DevLinksPreview from './pages/DevLinksPreview';
import Links from './pages/Links';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SharePreview from './pages/Preview';
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
  style: {
    fontWeight: 'bold',
  },
  success: {
    style: {
      backgroundColor: 'hsl(0,0%,20%)',
      color: 'hsl(0,0%,85%)',
      textAlign: 'center',
      alignItems: 'start',
      padding: '1px',
    },
  },
};

const customContainerStyle = {
  top: 'unset',
  bottom: 90,
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
            <Route path="links/preview" element={<DevLinksPreview />} />
          </Route>
          <Route path="links/preview/:username" element={<SharePreview />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        containerStyle={customContainerStyle}
        toastOptions={customToastOptions}
      />
    </QueryClientProvider>
  );
}

export default App;
