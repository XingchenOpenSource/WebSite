import { defineConfig } from 'vitepress'

export const en = defineConfig({
  title: "Xingchen OpenSource",
  lang: 'en-us',
  description: "Enabling open source every day. ",
  themeConfig: {
    nav: [
      {text: "Interface", link: "/en/apis/main", activeMatch: "/en/apis/"}
    ],

sidebar: {
      "/en/apis/": [{
        "text": "Interface",
        "items": [{
          "text": "Index",
          "link": "/en/apis/"
        }, {
          "text": "TodayDiscourse",
          "link": "/en/apis/todaydiscourse"
        }]
      }, {
        "text": "Other",
        "items": [{
          "text": "None yet",
          "link": "#"
        }]
      }],
    },

editLink: {
      pattern: 'https://github.com/XingchenOpenSource/Website/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

footer: {
      copyright: 'Copyright © ${new Date().getFullYear()} Xingchen Open Source '
    }
  }
})
