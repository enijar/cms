import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Page from "@/components/page/page";

const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const Schemas = React.lazy(() => import("@/pages/schemas"));
const Users = React.lazy(() => import("@/pages/users"));
const Login = React.lazy(() => import("@/pages/auth/login"));
const ForgotPassword = React.lazy(() => import("@/pages/auth/forgot-password"));
const Home = React.lazy(() => import("@/pages/home"));

export default function App() {
  return (
    <>
      <AppReset />
      <Page>
        <React.Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schemas" element={<Schemas />} />
            <Route path="/users" element={<Users />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </React.Suspense>
      </Page>
    </>
  );
}
