const config = {
  apiUrl: process.env.API_URL ?? "http://localhost:3000",
  menuLinks: [
    { to: "/", label: "Dashboard", routeMatcher: "/" },
    { to: "/content", label: "Content", routeMatcher: "/content/:name" },
    { to: "/users", label: "Users", routeMatcher: "/users" },
  ],
} as const;

export default config;
