import { defineConfig } from "vitepress";

export default defineConfig({
  // 站点级选项
  title: "英语学习",
  description: "英语学习课程总结",
  base: "/english/",
  srcDir: ".",
  outDir: "./dist",
  head: [["link", { rel: "icon", href: "/english/icon.svg" }]],
  themeConfig: {
    lastUpdated: { text: "2024-06-16" },
    outlineTitle: "页面导航",
    logo: "/icon.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/newStu/English" },
    ],
    search: {
      provider: "local",
    },
    nav: [
      { text: "Lesson", link: "/lesson" },
      { text: "Level 1", link: "/level1/" },
      { text: "Level 2", link: "/level2/" },
      // { text: "Level 3", link: "/level3/" },
      // { text: "Level 4", link: "/level4/" },
      // { text: "Level 5", link: "/level5/" },
      {
        text: "Composition",
        link: "/composition/",
      },
    ],
    sidebar: {
      "/level1/": [
        {
          text: "Level 1",
          items: [],
        },
      ],
      "/level2/": [
        {
          text: "Level 2",
          items: [
            { text: "2-1 我想吃披萨", link: "/level2/1" },
            { text: "2-2 我喜欢打羽毛球", link: "/level2/2" },
          ],
        },
      ],
      "/composition/": [
        {
          text: "汪汪",
          items: [
            {
              text: "我的小猫咪",
              link: "/composition/ww/My Cat",
            },
          ],
        },
        {
          text: "胖胖",
          items: [
            {
              text: "我的小猫咪",
              link: "/composition/pp/My Cat",
            },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present WW",
    },
  },
});
