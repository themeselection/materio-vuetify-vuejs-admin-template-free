import type { Component, Ref, VNode } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { ContentWidth, FooterType, NavbarType } from './enums'

export interface UserConfig {
  app: {
    title: Lowercase<string>
    logo: VNode
    contentWidth: typeof ContentWidth[keyof typeof ContentWidth]
    contentLayoutNav: typeof AppContentLayoutNav[keyof typeof AppContentLayoutNav]
    overlayNavFromBreakpoint: number
    enableI18n: boolean
    isRtl: boolean
    iconRenderer?: Component
  }
  navbar: {
    type: typeof NavbarType[keyof typeof NavbarType]
    navbarBlur: boolean
  }
  footer: {
    type:typeof FooterType[keyof typeof FooterType]
  }
  verticalNav: {
    isVerticalNavCollapsed: boolean
    defaultNavItemIconProps: unknown
  }
  horizontalNav: {
    type: 'sticky' | 'static' | 'hidden'
    transition?: string | Component
  }
  icons: {
    chevronDown: any
    chevronRight: any
    close: any
    verticalNavPinned: any
    verticalNavUnPinned: any
    sectionTitlePlaceholder: any
  }
}

/*
  TODO: use MergeDeep for DRY
   Waiting for https://github.com/sindresorhus/type-fest/issues/150
*/
export interface Config {
  app: {
    title: UserConfig['app']['title']
    logo: UserConfig['app']['logo']
    contentWidth: Ref<UserConfig['app']['contentWidth']>
    contentLayoutNav: Ref<UserConfig['app']['contentLayoutNav']>
    overlayNavFromBreakpoint: UserConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserConfig['app']['enableI18n']
    isRtl: Ref<UserConfig['app']['isRtl']>
    iconRenderer?: UserConfig['app']['iconRenderer']
  }
  navbar: {
    type: Ref<UserConfig['navbar']['type']>
    navbarBlur: Ref<UserConfig['navbar']['navbarBlur']>
  }
  footer: {
    type: Ref<UserConfig['footer']['type']>
  }
  verticalNav: {
    isVerticalNavCollapsed: Ref<UserConfig['verticalNav']['isVerticalNavCollapsed']>
    defaultNavItemIconProps: UserConfig['verticalNav']['defaultNavItemIconProps']
  }
  horizontalNav: {
    type: Ref<UserConfig['horizontalNav']['type']>
    transition?: UserConfig['horizontalNav']['transition']
  }
  icons: {
    chevronDown: UserConfig['icons']['chevronDown']
    chevronRight: UserConfig['icons']['chevronRight']
    close: UserConfig['icons']['close']
    verticalNavPinned: UserConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserConfig['icons']['sectionTitlePlaceholder']
  }
}

interface AclProperties {
  action: string
  subject: string
}

// 👉 Vertical nav section title
export interface NavSectionTitle extends Partial<AclProperties> {
  heading: string
}

// 👉 Vertical nav link
declare type ATagTargetAttrValues = '_blank' | '_self' | '_parent' | '_top' | 'framename'
declare type ATagRelAttrValues =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag'

export interface NavLinkProps {
  to?: RouteLocationRaw | string | null
  href?: string
  target?: ATagTargetAttrValues
  rel?: ATagRelAttrValues
}

export interface NavLink extends NavLinkProps, Partial<AclProperties> {
  title: string
  icon?: unknown
  badgeContent?: string
  badgeClass?: string
  disable?: boolean
}

// 👉 Vertical nav group
export interface NavGroup extends Partial<AclProperties> {
  title: string
  icon?: unknown
  badgeContent?: string
  badgeClass?: string
  children: (NavLink | NavGroup)[]
  disable?: boolean
}

export declare type VerticalNavItems = (NavLink | NavGroup | NavSectionTitle)[]
export declare type HorizontalNavItems = (NavLink | NavGroup)[]

// 👉 Components ========================

interface I18nLanguage {
  label: string
  i18nLang: string
}

// avatar | text | icon
// Thanks: https://stackoverflow.com/a/60617060/10796681
type Notification = {
  id:number
  title: string
  subtitle: string
  time: string
  color?: string
  isSeen: boolean
} & (
  | { img: string; text?: never; icon?: never }
  | { img?: never; text: string; icon?: never }
  | { img?: never; text?: never; icon: string }
)

interface ThemeSwitcherTheme {
  name: string
  icon: string
}
