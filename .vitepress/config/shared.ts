import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LightningRobot/main' }
    ]
  }
})
