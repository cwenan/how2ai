import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AI前沿",
  description: "如何到达AI尽头",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
