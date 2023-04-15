import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "@/cms/components/page/page";

const Dashboard = React.lazy(() => import("@/cms/pages/dashboard"));
const ContentList = React.lazy(() => import("@/cms/pages/content-list"));
const Content = React.lazy(() => import("@/cms/pages/content"));
const Users = React.lazy(() => import("@/cms/pages/users"));
const AuthLogin = React.lazy(() => import("@/cms/pages/auth/auth-login"));
const AuthForgotPassword = React.lazy(
  () => import("@/cms/pages/auth/auth-forgot-password")
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
