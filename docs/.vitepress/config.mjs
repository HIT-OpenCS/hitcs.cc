import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HIT OpenCS",
  description: "https://hitcs.cc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '萌新指南',
        collapsible: true,
        collapsed: true,
        link: '/萌新指南/README.md',
        items: [
          { 
            text: '前言', 
            link: '/萌新指南/前言' 
          },
          { 
            text: '政策', 
            link: '/萌新指南/政策' 
          },
          { 
            text: '工大电子系统', 
            link: '/萌新指南/工大电子系统' 
          },
          { 
            text: '学业', 
            link: '/萌新指南/学业/README.md' 
          },
          { 
            text: '创业', 
            link: '/萌新指南/创业/README.md' 
          },
          { 
            text: '升学', 
            link: '/萌新指南/升学/README.md' 
          },
          { 
            text: '竞赛', 
            link: '/萌新指南/竞赛/README.md' 
          },
          { 
            text: '投稿', 
            link: '/萌新指南/投稿' 
          },
          { 
            text: '后记', 
            link: '/萌新指南/后记' 
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
