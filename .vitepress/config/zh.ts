import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  title: "星辰开源",
  lang: 'zh-Hans',
  description: "助力开源每一天。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "接口", link: "/apis/main", activeMatch: "/apis/"}
    ],

    sidebar: {
      "/apis/": [{
        "text": "接口",
        "items": [{
          "text": "索引",
          "link": "/apis/"
        }, {
          "text": "今日话语",
          "link": "/apis/todaydiscourse"
        }]
      }, {
        "text": "其它",
        "items": [{
          "text": "暂无",
          "link": "#"
        }]
      }],
    },

    editLink: {
      pattern: 'https://github.com/XingchenOpenSource/Website/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © ${new Date().getFullYear()} 星辰开源 `
    }
  }
})
