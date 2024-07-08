<<<<<<< HEAD
import { defineConfig } from "vitepress";
import funny from "../funny/index";
import composition from "../composition/index";
import level1 from "../level1/index";
import level2 from "../level2/index";
import pronunciation from "../pronunciation/index";
import grammar from "../grammar/index";
import readwrite from "../readwrite/index";

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
        text: "Pronunciation",
        link: "/pronunciation/",
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
        text: "Study Way",
        link: "/study_way",
      },
    ],
    sidebar: {
      "/level1/": level1,
      "/level2/": level2,
      "/funny/": funny,
      "/composition/": composition,
      "/pronunciation/": pronunciation,
      "/grammar/": grammar,
      "/readwrite/": readwrite,
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present WW And PP",
    },
  },
});
=======
import { defineConfig } from "vitepress";
import funny from "../funny/index";
import composition from "../composition/index";
import level1 from "../level1/index";
import level2 from "../level2/index";
import pronunciation from "../pronunciation/index";
import education from "../education/index";

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
        text: "Pronunciation",
        link: "/pronunciation/",
      },
      {
        text: "Education",
        link: "/education",
      },
    ],
    sidebar: {
      "/level1/": level1,
      "/level2/": level2,
      "/funny/": funny,
      "/composition/": composition,
      "/pronunciation/": pronunciation,
      "/education/": education,
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present WW And PP",
    },
  },
});
>>>>>>> b08fa4517346733590a4074b4b35eaa992acaa43
