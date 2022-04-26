import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { fa } from '@formkit/i18n'
import '@formkit/themes/genesis'

createApp(App).use(plugin, defaultConfig({
  // Define additional locales
  locales: { fa },
  // Define the active locale
  locale: 'fa',

})).mount('#app')
