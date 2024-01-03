import { createPinia } from 'pinia'

export const store = createPinia()
export default function (app) {
  app.use(store)
}
