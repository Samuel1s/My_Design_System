// import { join, dirname } from "path";

// /**
//  * This function is used to resolve the absolute path of a package.
//  * It is needed in projects that use Yarn PnP or are set up within a monorepo.
//  */
// function getAbsolutePath(value) {
//   return dirname(require.resolve(join(value, "package.json")));
// }

// const config = {
//   stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
//   addons: [
//     getAbsolutePath("@storybook/addon-links"),
//     getAbsolutePath("@storybook/addon-essentials"),
//     getAbsolutePath("@storybook/addon-onboarding"),
//     getAbsolutePath("@storybook/addon-interactions"),
//     getAbsolutePath("@storybook/addon-a11y"),
//   ],
//   framework: {
//     name: getAbsolutePath("@storybook/react-vite"),
//     options: {},
//   },
//   core: {
//     builder: getAbsolutePath("@storybook/builder-vite"),
//   },
//   features: {
//     storyStoreV7: true,
//   },
//   viteFinal: (config, { configType }) => {
//     if (configType === "PRODUCTION") {
//       config.base = "/My_Design_System/";
//     }

//     if (configType === "DEVELOPMENT") {
//       config.base = "/My_Design_System/";
//     }

//     return config;
//   },
// };
// export default config;
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },

  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/My_Design_System/";
    }

    return config;
  },
};
