import { Icon } from '@iconify/vue'
import { aliases } from 'vuetify/lib/iconsets/mdi'

const alertTypeIcon = {
  success: 'mdi-check-circle-outline',
  info: 'mdi-information-outline',
  warning: 'mdi-alert-outline',
  error: 'mdi-alert-circle-outline',
}

const modifiedAliases = Object.assign(aliases, alertTypeIcon)

export const iconify = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => h(Icon, props),
}

export const icons = {
  defaultSet: 'iconify',
  mergedAliases: modifiedAliases,
  sets: {
    iconify,
  },
}
