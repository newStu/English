import { defineConfig } from "vitepress";

export default defineConfig({
  // 站点级选项
  title: "English Study",
  description: "English Lessons Notes",
  base: "/English/",
  srcDir: ".",
  outDir: "dist",
  head: [["link", { rel: "icon", href: "/English/icon.svg" }]],
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
        link: "/composition",
      },
      {
        text: "Funny English",
        link: "/funny/",
      },
      {
        text: "Study Way",
        link: "/study_way",
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
      "/funny/": [
        { text: "社恐", link: "/funny/1" },
        { text: "社牛", link: "/funny/2" },
        { text: "缩写", link: "/funny/3" },
        { text: "惊呆了", link: "/funny/4" },
        { text: "always 与进行时连用的不同含义", link: "/funny/5" },
        { text: "有趣的完全重叠词", link: "/funny/6" },
        { text: "短语句型替换", link: "/funny/7" },
        { text: "你必须知道的地道表达", link: "/funny/8" },
        { text: "用食物来形容一个人", link: "/funny/9" },
        { text: "写作中常用的万能短语", link: "/funny/10" },
        { text: "常见疑难易错点分析积累", link: "/funny/11" },
        { text: "如何用英语称赞别人的能力", link: "/funny/12" },
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
      copyright: "Copyright © 2024-present WW And PP",
    },
  },
});
