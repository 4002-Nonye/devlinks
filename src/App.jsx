import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import DevLinksPreview from './pages/DevLinksPreview';
import DevLinks from './pages/DevLinks';
import Links from './pages/Links';
import Login from './pages/Login';
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
    textAlign: 'center',
    alignItems: 'start',
    padding: '1px',
  },
  success: {
    style: {
      backgroundColor: 'hsl(0,0%,20%)',
      color: 'hsl(0,0%,85%)',
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
