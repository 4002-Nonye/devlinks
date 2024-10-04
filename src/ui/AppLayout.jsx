import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <main className='bg-white-200' >
      <Outlet />
    </main>
  );
}

export default AppLayout;
