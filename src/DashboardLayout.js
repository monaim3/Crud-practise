import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay bg-rose-400"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <li><Link to="/dashboard/alluser">All User</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  
  </div>
</div>
        </>
    );
};

export default DashboardLayout;