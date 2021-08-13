<template>
  <v-list-group
    ref="refVListGroup"
    class="vertical-nav-menu-group text--primary"
  >
    <template #prependIcon>
      <v-icon :class="{'alternate-icon-small': !icon}">
        {{ icon }}
      </v-icon>
    </template>
    <template #activator>
      <v-list-item-title>
        {{ title }}
      </v-list-item-title>
    </template>

    <slot></slot>
  </v-list-group>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss">
// @import '~vuetify/src/styles/styles.sass';

.app-navigation-menu {
  .v-list-item {
    padding-left: 22px;
    margin-top: 0.375rem;
    height: 44px;
    min-height: 44px;

    .v-list-item__icon {
      margin-top: 0;
      margin-bottom: 0;
      align-self: center;
    }
  }

  @include theme(v-list-group__header) using ($material) {
    &.v-list-item--active {
      background-color: rgba(map-deep-get($material, 'text', 'primary'), map-deep-get($material, 'states', 'selected'));
    }
  }

  .vertical-nav-menu-group {
    & > .v-list-group__header > .v-list-group__header__append-icon .v-icon {
      transform: rotate(-90deg);
    }

    &.v-list-group--active > .v-list-group__header > .v-list-group__header__append-icon .v-icon {
      transform: none;
    }
  }
}

// .vertical-nav-menu-group {
//   &.v-list-group--active > .v-list-group__header > .v-list-group__header__append-icon .v-icon {
//     transform: none;
//   }

//   & > .v-list-group__header > .v-list-group__header__append-icon .v-icon {
//     transform: rotate(-90deg);
//   }

//   & & .v-list-group__items .v-list-item__icon {
//     visibility: hidden;
//   }
// }

// @include theme(vertical-nav-menu-group) using ($material) {
//   &.vertical-nav-menu-group-active > .v-list-group__header {
//     background-color: rgba(map-deep-get($material, 'text', 'primary'), map-deep-get($material, 'states', 'selected'));
//   }
// }

// .alternate-icon-small {
//   font-size: 14px;
//   height: 14px;
//   width: 14px;
// }
</style>
