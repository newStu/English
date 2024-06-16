---
layout: home
hero:
  name: 英语学习
  text: 英语学习课程总结
  tagline: Learn English...
  image:
    src: /public/logo.jpg
    alt: English Study
    max-width: 1000
  actions:
    - theme: brand
      text: Get Started
      link: /lesson
    - theme: alt
      text: View on GitHub
      link: https://github.com/newStu/English
features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
  - icon:
      src: /cool-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
    title: Another cool feature
    details: Lorem ipsum...
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e9c990 30%, #c89256);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #e9c990 50%, #c89256 50%);
  --vp-home-hero-image-filter: blur(44px);
  
  --vp-c-indigo-3: #e9c990;
  --vp-button-brand-hover-bg: #c89256;

  --vp-c-indigo-1: #e9c990;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
