import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'

import Box from './components/base/Box.vue'
import IsPhoneNumDemo from './components/regex/isPhoneNumDemo.vue'
import IsSafariDemo from './components/regex/isSafariDemo.vue'
import IsMobileDemo from './components/regex/isMobileDemo.vue'
import IsEmailDemo from './components/regex/isEmailDemo.vue'
import IsIdCardDemo from './components/regex/isIdCardDemo.vue'
import IsIpv4Demo from './components/regex/isIpv4Demo.vue'
import IsIpv6Demo from './components/regex/isIpv6Demo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Box', Box)
    app.component('IsPhoneNumDemo', IsPhoneNumDemo)
    app.component('IsSafariDemo', IsSafariDemo)
    app.component('IsMobileDemo', IsMobileDemo)
    app.component('IsEmailDemo', IsEmailDemo)
    app.component('IsIdCardDemo', IsIdCardDemo)
    app.component('IsIpv4Demo', IsIpv4Demo)
    app.component('IsIpv6Demo', IsIpv6Demo)
  },
}
