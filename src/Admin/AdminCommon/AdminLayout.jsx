import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdminHeader setOpen={setOpen} isSidebarOpen={open} />
      <AdminSidebar open={open} />
      <div
        className={`pt-16 transition-all duration-300 ${
          open ? "pl-64" : "pl-20"
        }`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
