module.exports = {
  title: "前端进阶笔记",
  description: "Javascript, Vue, React, Typescript, NodeJs, Webpack, Vite, Mysql",
  head: [["link", { rel: "icon", href: "/favico.ico" }]],
  host: "127.0.0.1",
  port: 8888,
  themeConfig: {
    logo: "/favico.ico",
    displayAllHeaders: true,
    sidebar: {
      "/guide/": [
        ["", "指南"],
        ["links", "相关链接"],
        ["books", "获取前端电子书"],
      ],
    },
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "Github", link: "https://github.com/G0ngzheng/G0ngzheng.github.io" },
    ],
  },
};
