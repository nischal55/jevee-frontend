import { Navigate, Outlet } from "react-router-dom"

import { useSelector } from "react-redux"

export default function ProtectedRoutes({children}) {
  const {user,isAuthenticated}=useSelector(state=>state.auth)
  // if(!isAuthenticated){
  //   console.log("8")
  //   return <Navigate to="/"/>
  // }
  // if(isAuthenticated && !user.role==="admin"){
  //   console.log("11")
  //   return <Navigate to="/"/>
  // }
  return (
    <>
      {children}
      
    </>
  )
}
