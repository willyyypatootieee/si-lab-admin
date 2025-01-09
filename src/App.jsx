import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Cookies from "js-cookie";

function App() {
  const accessToken = Cookies.get("access_token");

  return (
    <Routes>
      <Route path="/dashboard/*" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/auth/*" element={
        accessToken ? <Navigate to="/dashboard/home" replace /> : <Auth />
      } />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
