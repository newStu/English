import { defineConfig } from "vitepress";
import funny from "../funny/index";
import composition from "../composition/index";
import level1 from "../level1/index";
import level2 from "../level2/index";
import pronunciation from "../pronunciation/index";
import grammar from "../grammar/index";
import readwrite from "../readwrite/index";
import education from "../education/index";
import { socialLinks } from "./common";
export default defineConfig({
  // 站点级选项
  title: "English Study",
  description: "English Lessons Notes",
  base: "/English/",
  srcDir: ".",
  outDir: "dist",
  head: [["link", { rel: "icon", href: "/English/public/icon.svg" }]],
  themeConfig: {
    lastUpdated: { text: "2024-06-16" },
    outlineTitle: "页面导航",
    socialLinks: socialLinks,
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Lesson",
        items: [
          { text: "Level 1", link: "/level1/" },
          { text: "Level 2", link: "/level2/" },
          { text: "Level 3", link: "/level3/" },
          { text: "Level 4", link: "/level4/" },
          { text: "Level 5", link: "/level5/" },
        ],
      },
      {
        text: "Grammar",
        link: "/grammar/",
      },
      {
        text: "Read Write",
        link: "/readwrite/",
      },
      {
        text: "Pronunciation",
        link: "/pronunciation/",
      },
      {
        text: "Funny English",
        link: "/funny/",
      },
      {
        text: "Composition",
        link: "/composition",
      },
      {
        text: "Education",
        link: "/education",
      },
    ],
    sidebar: {
      "/level1/": level1,
      "/level2/": level2,
      "/grammar/": grammar,
      "/readwrite/": readwrite,
      "/pronunciation/": pronunciation,
      "/funny/": funny,
      "/composition/": composition,
      "/education/": education,
    },
    sidebarDepth: 3,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present WW And PP",
    },
  },
});
