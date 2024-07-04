import { aliases } from 'vuetify/iconsets/mdi'

const alertTypeIcon = {
  success: 'mdi-check-circle-outline',
  info: 'mdi-information-outline',
  warning: 'mdi-alert-outline',
  error: 'mdi-alert-circle-outline',

}

const modifiedAliases = Object.assign(aliases, alertTypeIcon)

export const iconify = {
  component: (props: any) => {
    // Extract icon & tag from props to avoid passing them to the component
    const { icon, tag, ...restProps } = props

    return h(
      tag,
      {
        ...restProps,
        class: [props.class, icon],
      },
    )
  },
}

export const icons = {
  defaultSet: 'iconify',
  mergedAliases: modifiedAliases,
  sets: {
    iconify,
  },
}
