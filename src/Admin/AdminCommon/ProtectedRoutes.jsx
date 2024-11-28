import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

export default function ProtectedRoutes({ children }) {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Properly check if the user is not an admin
  if (isAuthenticated && user?.role_name !== "admin") {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
