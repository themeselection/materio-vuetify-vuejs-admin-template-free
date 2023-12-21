import { createPinia } from 'pinia'
import type { App } from 'vue'

export const store = createPinia()

export default function (app: App) {
  app.use(store)
}
