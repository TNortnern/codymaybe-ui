import { createApp } from 'vue'
import Dev from './serve.vue'
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import CodehouseMaybeUi from '@/entry.esm'
import '../src/styles/style.scss'
const scriptMixin = {
  mounted() {
    // const recaptchaScript = document.createElement("script");
    // recaptchaScript.setAttribute(
    //   "src",
    //   "https://www.google.com/recaptcha/api.js"
    // );
    // document.head.appendChild(recaptchaScript);
    const codyUIInit = document.createElement('script')
    codyUIInit.innerHTML = document.getElementsByTagName('html')[0].className +=
      ' js'
    const codyUIScript = document.createElement('script')
    codyUIScript.setAttribute(
      'src',
      'https://unpkg.com/codyhouse-framework/main/assets/js/util.js'
    )
    document.body.appendChild(codyUIScript)
  },
}

const app = createApp(Dev)
app.use(CodehouseMaybeUi)
app.mixin(scriptMixin)
app.mount('#app')
