import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import SignInPage from "../pages/login/index.tsx";
import Dashboard from "../pages/dashboard/";
import { getLocalStorageAuth } from "../hooks/useAuth.tsx";

export default function RoutesFunction() {
  type PrivateProps = {
    children: React.ReactNode;
  };

  const navigation = useNavigate();

  const Private = ({ children }: PrivateProps) => {
    const { authenticated, loading } = useAuth();

    if (loading) {
      return <div>Carregando...</div>;
    }

    return authenticated ? children : <Navigate to="/" />;
  };

  useEffect(() => {
    getLocalStorageAuth() ? navigation("/dashboard") : navigation("/");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />

      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />
    </Routes>
  );
}
