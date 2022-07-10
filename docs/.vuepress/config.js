module.exports = {
  title: "JUST DO IT",
  description: "Just do it!",
  // head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: "auto",
    // sidebar: {
    //     "/node/": [
    //         ["", "node目录"],
    //         ["path", "作为前端也需要知道的路径知识"],
    //         ["stream", "node核心模块-stream"],
    //     ],
    //     "/web/": [
    //         ["", "前端"],
    //         {
    //             title: "css",
    //             name: "css",
    //             collabsable: false,
    //             children: [
    //                 ["css/", "目录"],
    //                 ["css/1", "css常考面试题"],
    //             ],
    //         },
    //     ],
    // },
    // nav: [
    //     { text: "主页", link: "/" },
    //     { text: "node", link: "/node/" },
    //     // 一级导航
    //     // { text: "前端", link: "/webframe/" },
    //     // 二级导航
    //     {
    //         text: "前端",
    //         items: [
    //             { text: "html", link: "/web/html/" },
    //             { text: "css", link: "/web/css/" },
    //         ],
    //     },
    //     { text: "数据库", link: "/database/" },
    //     { text: "android", link: "/android/" },
    //     { text: "leetcode", link: "/leetcode/" },
    //     { text: "面试问题", link: "/interview/" },
    // ],
  },
  plugins: [
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"],
    // [
    //     "vuepress-plugin-comment",
    //     {
    //         choosen: "valine",
    //         // options选项中的所有参数，会传给Valine的配置
    //         options: {
    //             el: "#valine-vuepress-comment",
    //             appId: "apP3n3jjzEjEqcuoFqoADEE7-gzGzoHsz",
    //             appKey: "Om3xFWNBlihjEHxov2q7BEcS",
    //         },
    //     },
    // ],

    // {
    //     name: "page-plugin",
    //     globalUIComponents: ["fixed"],
    // },
  ],
};
