import cmsConfig from "@/cms/config";

const config = {
  apiUrl: cmsConfig.apiUrl,
  menuLinks: [
    ...cmsConfig.menuLinks,
    // Your links here
    { to: "/example", label: "Example", routeMatcher: "/example" },
  ],
} as const;

export default config;
