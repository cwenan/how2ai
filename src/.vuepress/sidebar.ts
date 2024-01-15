import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "AI周刊",
      icon: "laptop-code",
      prefix: "newsletter/",
      link: "article/",
      children: "structure",
    },

    {
      text: "AI扫盲",
      icon: "tools",
      prefix: "resource/",
      children: "structure",
    },

    {
      text: "交流",
      icon: "info",
      prefix: "other/",
      children: "structure",
    },

  

    

  ],
});
