import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export function ProtectedRoute({ children }) {
  const accessToken = Cookies.get("access_token");

  if (!accessToken) {
    // Redirect to the sign-in page if the token is missing or invalid
    return <Navigate to="/auth/sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
