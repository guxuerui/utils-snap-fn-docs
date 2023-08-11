import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  description: 'Api docs, build on top of typescript.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    siteTitle: 'utils-snap-fn-docs',
    title: 'utils-snap-fn-docs',
    search: {
      provider: 'local',
    },
    footer: {
      message: 'utils-snap-fn-docs',
      copyright: 'Copyright © 2023 guxuerui',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/guxuerui/utils-snap-fn-docs' },
    ],
    editLink: {
      pattern: 'https://github.com/guxuerui/utils-snap-fn-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
  } as any,
  vite: {
    plugins: [
      Unocss(),
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    ssr: {
      noExternal: ['utils-snap-fn'],
    },
  },
  head: [
    ['link', { rel: 'icon', href: 'favicon.svg' }],
  ],
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    {
      text: 'External Docs',
      items: [
        {
          text: 'utils-snap-fn',
          link: 'https://github.com/guxuerui/utils-snap-fn',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Get Started', link: '/guide/' },
      ],
    },
    {
      text: 'API',
      collapsible: true,
      items: [
        {
          text: 'Regex',
          collapsible: true,
          items: [
            { text: 'isPhoneNum', link: '/guide/regex/isPhoneNum' },
            { text: 'isSafari', link: '/guide/regex/isSafari' },
            { text: 'isMobile', link: '/guide/regex/isMobile' },
            { text: 'isEmail', link: '/guide/regex/isEmail' },
            { text: 'isIdCard', link: '/guide/regex/isIdCard' },
            { text: 'isIpv4', link: '/guide/regex/isIpv4' },
            { text: 'isIpv6', link: '/guide/regex/isIpv6' },
            { text: 'isValidUUID ', link: '/guide/regex/isValidUUID' },
          ],
        },
        {
          text: 'Array',
          collapsible: true,
          items: [
            { text: 'isArrayEqual', link: '/guide/array/isArrayEqual' },
            { text: 'removeDuplicatesObj', link: '/guide/array/removeDuplicatesObj' },
          ],
        },
        {
          text: 'Random',
          collapsible: true,
          items: [
            { text: 'randomUUID', link: '/guide/random/randomUUID' },
            { text: 'randomNum', link: '/guide/random/randomNum' },
            { text: 'randomColor', link: '/guide/random/randomColor' },
          ],
        },
        {
          text: 'String',
          collapsible: true,
          items: [
            { text: 'capitlasFirstLetter', link: '/guide/string/capitlasFirstLetter' },
            { text: 'uppercaseEveryWord', link: '/guide/string/uppercaseEveryWord' },
            { text: 'uppercaseEveryLetters', link: '/guide/string/uppercaseEveryLetters' },
            { text: 'lowercaseEveryLetters', link: '/guide/string/lowercaseEveryLetters' },
          ],
        },
        {
          text: 'Tree',
          collapsible: true,
          items: [
            { text: 'findTreeNode', link: '/guide/tree/findTreeNode' },
            { text: 'findAllNode', link: '/guide/tree/findAllNode' },
          ],
        },
        {
          text: 'Dom',
          collapsible: true,
          items: [
            { text: 'getScrollTop', link: '/guide/dom/getScrollTop' },
            { text: 'setScrollTop', link: '/guide/dom/setScrollTop' },
            { text: 'scrollTo', link: '/guide/dom/scrollTo' },
          ],
        },
      ],
    },
  ]
}
