import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "@/components/page/page";

const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const ContentList = React.lazy(() => import("@/pages/content-list"));
const Content = React.lazy(() => import("@/pages/content"));
const Users = React.lazy(() => import("@/pages/users"));
const AuthLogin = React.lazy(() => import("@/pages/auth/auth-login"));
const AuthForgotPassword = React.lazy(
  () => import("@/pages/auth/auth-forgot-password")
);

type Props = {
  children?: React.ReactNode;
};

export default function Pages({ children }: Props) {
  return (
    <Page>
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/content" element={<ContentList />} />
          <Route path="/content/:name" element={<Content />} />
          <Route path="/users" element={<Users />} />
          <Route path="/auth/login" element={<AuthLogin />} />
          <Route
            path="/auth/forgot-password"
            element={<AuthForgotPassword />}
          />
          {children}
        </Routes>
      </React.Suspense>
    </Page>
  );
}
