import * as dotenv from "dotenv"

dotenv.config();

module.exports = {
  expo: {
    name: "iweather",
    slug: "iweather",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#13131A",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#13131A",
      },
      package: "br.com.felipealexandre012.iweather",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    experiments: {
      tsconfigPaths: true,
    },
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
    plugins: ["expo-font"],
  },
};
