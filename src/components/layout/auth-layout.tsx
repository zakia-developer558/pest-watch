// components/layout/auth-layout.tsx
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};