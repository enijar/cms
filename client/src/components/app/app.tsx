import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";

const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const Login = React.lazy(() => import("@/pages/auth/login"));
const ForgotPassword = React.lazy(() => import("@/pages/auth/forgot-password"));
const Home = React.lazy(() => import("@/pages/home"));

export default function App() {
  return (
    <>
      <AppReset />
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </React.Suspense>
    </>
  );
}
