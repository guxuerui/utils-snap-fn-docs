import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'

import Feature from './components/uno/Feature.vue'
import Posts from './components/blog/Posts.vue'
import Post from './components/blog/Post.vue'
import PostDetail from './components/blog/PostDetail.vue'
import PostIcon from './components/blog/PostIcon.vue'
import PostAuthor from './components/blog/PostAuthor.vue'
import AuthorDetail from './components/blog/AuthorDetail.vue'
import Box from './components/base/Box.vue'
import IsPhoneNumDemo from './components/regex/IsPhoneNumDemo.vue'
import IsSafariDemo from './components/regex/isSafariDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Feature', Feature)
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
    app.component('Box', Box)
    app.component('IsPhoneNumDemo', IsPhoneNumDemo)
    app.component('IsSafariDemo', IsSafariDemo)
  },
}
