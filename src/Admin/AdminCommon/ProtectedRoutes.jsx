import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"

export default function ProtectedRoutes() {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
      
    </>
  )
}
