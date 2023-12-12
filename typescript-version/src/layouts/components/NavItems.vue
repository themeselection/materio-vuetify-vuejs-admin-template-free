<script lang="ts" setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'Dashboards',
      badgeContent: '5',
      badgeClass: 'bg-error',
      icon: 'mdi-home-outline',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Analytics',
        to: '/dashboard',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'CRM',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/dashboards/crm',
        target: '_blank',
        badgeContent: 'PRO',
        badgeClass: 'bg-light-primary text-primary',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'ECommerce',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/dashboards/ecommerce',
        target: '_blank',
        badgeContent: 'PRO',
        badgeClass: 'bg-light-primary text-primary',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Academy',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/dashboards/academy',
        target: '_blank',
        badgeContent: 'PRO',
        badgeClass: 'bg-light-primary text-primary',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Logistics',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/dashboards/logistics',
        target: '_blank',
        badgeContent: 'PRO',
        badgeClass: 'bg-light-primary text-primary',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 Front Pages -->
  <VerticalNavGroup
    :item="{
      title: 'Front Pages',
      icon: 'mdi-flip-to-front',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Landing',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/front-pages/landing-page',
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Pricing',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/front-pages/pricing',
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Payment',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/front-pages/payment',
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Checkout',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/front-pages/checkout',
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Help Center',
        href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/front-pages/help-center',
        target: '_blank',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Apps & Pages',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Permissions',
      icon: 'mdi-shield-account-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/apps/permissions',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Email',
      icon: 'mdi-email-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/apps/email',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Chat',
      icon: 'mdi-message-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/apps/chat',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Calendar',
      icon: 'mdi-calendar-blank-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/apps/calendar',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Account Settings',
      icon: 'mdi-account-cog-outline',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Login',
      icon: 'mdi-login',
      to: '/login',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Register',
      icon: 'mdi-account-plus-outline',
      to: '/register',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Error',
      icon: 'mdi-information-outline',
      to: '/no-existence',
    }"
  />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Typography',
      icon: 'mdi-alpha-t-box-outline',
      to: '/typography',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'mdi-eye-outline',
      to: '/icons',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Cards',
      icon: 'mdi-credit-card-outline',
      to: '/cards',
    }"
  />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Forms & Tables',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Layouts',
      icon: 'mdi-form-select',
      to: '/form-layouts',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Validation',
      icon: 'mdi-checkbox-marked-circle-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/forms/form-validation',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Wizard',
      icon: 'mdi-align-vertical-distribute',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/forms/form-wizard-numbered',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Tables',
      icon: 'mdi-table',
      to: '/tables',
    }"
  />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Others',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Access Control',
      icon: 'mdi-shield-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/demo-1/access-control',
      target: '_blank',
      badgeContent: 'PRO',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Documentation',
      icon: 'mdi-file-document-outline',
      href: 'https://demos.themeselection.com/master-vuetify-vuejs-admin-template/documentation/',
      target: '_blank',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Raise Support',
      href: 'https://github.com/themeselection/master-vuetify-vuejs-admin-template-free/issues',
      icon: 'mdi-lifebuoy',
      target: '_blank',
    }"
  />
</template>
