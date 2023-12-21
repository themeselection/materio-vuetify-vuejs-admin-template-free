import { aliases } from 'vuetify/iconsets/mdi'

const alertTypeIcon = {
  success: 'mdi-check-circle-outline',
  info: 'mdi-information-outline',
  warning: 'mdi-alert-outline',
  error: 'mdi-alert-circle-outline',

}

const modifiedAliases = Object.assign(aliases, alertTypeIcon)

export const iconify = {
  component: (props: any) => h(
    props.tag,
    {
      ...props,
      class: [props.class, props.icon],

      // Remove used props from DOM rendering
      tag: undefined,
      icon: undefined,
    },
  ),
}

export const icons = {
  defaultSet: 'iconify',
  mergedAliases: modifiedAliases,
  sets: {
    iconify,
  },
}
