import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'

import Box from './components/base/Box.vue'
import IsPhoneNumDemo from './components/regex/IsPhoneNumDemo.vue'
import IsSafariDemo from './components/regex/isSafariDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Box', Box)
    app.component('IsPhoneNumDemo', IsPhoneNumDemo)
    app.component('IsSafariDemo', IsSafariDemo)
  },
}
