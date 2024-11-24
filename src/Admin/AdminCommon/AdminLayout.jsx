import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import CardBox from "../cardCompo/cardBox";

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

        <div className="cardHead">
          <h2>Dashboard</h2>
          {/* <i className="fas fa-shopping-cart"></i> */}
        </div>
        <CardBox />
      </div>
    </>
  );
};

export default AdminLayout;
