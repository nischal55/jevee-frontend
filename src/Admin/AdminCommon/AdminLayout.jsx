import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

import ProtectedRoutes from "./ProtectedRoutes";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <ProtectedRoutes>
      <AdminHeader setOpen={setOpen} isSidebarOpen={open} />
      <AdminSidebar open={open} setOpen={setOpen} />
      <div
        className={`pt-16 transition-all duration-300 ${open ? "lg:pl-64" : "lg:pl-20"}`}>



        <Outlet />


      </div>
    </ProtectedRoutes>
  );
};

export default AdminLayout;
