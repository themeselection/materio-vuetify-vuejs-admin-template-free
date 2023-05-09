<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { Anchor } from 'vuetify/lib/components'
import { avatarText } from '@core/utils/formatters'
import type { Notification } from '@layouts/types'

interface Props {
  notifications: Notification[]
  badgeProps?: unknown
  location?: Anchor
}
interface Emit {
  (e: 'read', value: number[]): void
  (e: 'unread', value: number[]): void
  (e: 'remove', value: number): void
  (e: 'click:notification', value: Notification): void
}

const props = withDefaults(defineProps<Props>(), {
  location: 'bottom end',
  badgeProps: undefined,
})

const emit = defineEmits<Emit>()

const isAllMarkRead = computed(() => {
  return props.notifications.some(item => item.isSeen === true)
})

const markAllReadOrUnread = () => {
  const allNotificationsIds = props.notifications.map(item => item.id)

  if (isAllMarkRead.value)
    emit('unread', allNotificationsIds)
  else
    emit('read', allNotificationsIds)
}
</script>

<template>
  <VBadge
    :model-value="!!props.badgeProps"
    v-bind="props.badgeProps"
  >
    <IconBtn>
      <VBadge
        dot
        :model-value="props.notifications.some(n => !n.isSeen)"
        color="error"
        bordered
        offset-x="1"
        offset-y="1"
      >
        <VIcon icon="mdi-bell-outline" />
      </VBadge>

      <VMenu
        activator="parent"
        width="380px"
        :location="props.location"
        offset="14px"
        :close-on-content-click="false"
      >
        <VCard class="d-flex flex-column">
          <!-- 👉 Header -->
          <VCardItem class="notification-section">
            <VCardTitle class="text-lg">
              Notifications
            </VCardTitle>

            <template #append>
              <IconBtn
                v-show="props.notifications.length"
                @click="markAllReadOrUnread"
              >
                <VIcon :icon="isAllMarkRead ? 'mdi-email-outline' : 'mdi-email-open-outline' " />

                <VTooltip
                  activator="parent"
                  location="start"
                >
                  {{ isAllMarkRead ? 'Mark all as unread' : 'Mark all as read' }}
                </VTooltip>
              </IconBtn>
            </template>
          </VCardItem>

          <VDivider />

          <!-- 👉 Notifications list -->
          <PerfectScrollbar
            :options="{ wheelPropagation: false }"
            style="max-height: 23.75rem;"
          >
            <VList class="py-0">
              <template
                v-for="notification in props.notifications"
                :key="notification.title"
              >
                <VListItem
                  link
                  lines="one"
                  min-height="66px"
                  class="list-item-hover-class"
                  @click="$emit('click:notification', notification)"
                >
                  <!-- Slot: Prepend -->
                  <!-- Handles Avatar: Image, Icon, Text -->
                  <template #prepend>
                    <VListItemAction start>
                      <VAvatar
                        :color="notification.color || 'primary'"
                        :image="notification.img || undefined"
                        :icon="notification.icon || undefined"
                        size="40"
                        variant="tonal"
                      >
                        <span v-if="notification.text">{{ avatarText(notification.text) }}</span>
                      </VAvatar>
                    </VListItemAction>
                  </template>

                  <VListItemTitle>{{ notification.title }}</VListItemTitle>
                  <VListItemSubtitle>{{ notification.subtitle }}</VListItemSubtitle>
                  <span class="text-xs text-disabled">{{ notification.time }}</span>

                  <!-- Slot: Append -->
                  <template #append>
                    <div class="d-flex flex-column align-center gap-4">
                      <VBadge
                        dot
                        :color="!notification.isSeen ? 'primary' : '#a8aaae'"
                        :class="`${notification.isSeen ? 'visible-in-hover' : ''} ms-1`"
                        @click.stop="$emit(notification.isSeen ? 'unread' : 'read', [notification.id])"
                      />

                      <div style=" width: 28px;height: 28px;">
                        <IconBtn
                          size="x-small"
                          class="visible-in-hover"
                          @click="$emit('remove', notification.id)"
                        >
                          <VIcon
                            size="20"
                            icon="mdi-close"
                          />
                        </IconBtn>
                      </div>
                    </div>
                  </template>
                </VListItem>
                <VDivider />
              </template>

              <VListItem
                v-show="!props.notifications.length"
                class="text-center text-medium-emphasis"
                style="height: 56px;"
              >
                <VListItemTitle>No Notification Found!</VListItemTitle>
              </VListItem>
            </VList>
          </PerfectScrollbar>

          <!-- 👉 Footer -->
          <VCardActions
            v-show="props.notifications.length"
            class="notification-footer"
          >
            <VBtn block>
              VIEW ALL NOTIFICATIONS
            </VBtn>
          </VCardActions>
        </VCard>
      </VMenu>
    </IconBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}

.notification-footer {
  padding: 6px !important;
}

.list-item-hover-class {
  .visible-in-hover {
    display: none;
  }

  &:hover {
    .visible-in-hover {
      display: block;
    }
  }
}
</style>
