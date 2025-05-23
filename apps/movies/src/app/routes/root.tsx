import { Outlet } from 'react-router-dom';
import { Navbar } from '@react-monorepo/movies-feature-navbar';

export function Root() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '10px' }}>
        <Outlet />
      </div>
    </>
  );
}
