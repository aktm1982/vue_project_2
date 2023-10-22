import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AppForm from './components/AppForm'
import AppBody from './components/AppBody'
import AppTitleComponent from './components/AppTitleComponent'
import AppSubtitleComponent from './components/AppSubtitleComponent'
import AppAvatarComponent from './components/AppAvatarComponent'
import AppTextComponent from './components/AppTextComponent'
import AppComments from './components/AppComments'

const app = createApp(App)
app.component('AppForm', AppForm)
app.component('AppBody', AppBody)
app.component('AppTitleComponent', AppTitleComponent)
app.component('AppSubtitleComponent', AppSubtitleComponent)
app.component('AppAvatarComponent', AppAvatarComponent)
app.component('AppTextComponent', AppTextComponent)
app.component('AppComments', AppComments)

app.mount('#app')
