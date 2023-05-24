<script lang="ts" setup>
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('12345678')
const newPassword = ref('87654321')
const confirmPassword = ref('87654321')

const passwordRequirements = [
  'Minimum 8 characters long - the more, the better',
  'At least one lowercase character',
  'At least one number, symbol, or whitespace character',
]

const serverKeys = [
  {
    name: 'Server Key 1',
    key: '23eaf7f0-f4f7-495e-8b86-fad3261282ac',
    createdOn: '28 Apr 2021, 18:20 GTM+4:10',
    permission: 'Full Access',
  },
  {
    name: 'Server Key 2',
    key: 'bb98e571-a2e2-4de8-90a9-2e231b5e99',
    createdOn: '12 Feb 2021, 10:30 GTM+2:30',
    permission: 'Read Only',
  },
  {
    name: 'Server Key 3',
    key: '2e915e59-3105-47f2-8838-6e46bf83b711',
    createdOn: '28 Dec 2020, 12:21 GTM+4:10',
    permission: 'Full Access',
  },
]
const recentDevices = [
  {
    browser: 'Chrome on Windows',
    device: 'HP Spectre 360',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: { icon: 'mdi-microsoft-windows', color: 'primary' },
  },
  {
    browser: 'Chrome on iPhone',
    device: 'iPhone 12x',
    location: 'Los Angeles, CA',
    recentActivity: '20 Apr 2022, 10:20',
    deviceIcon: { icon: 'mdi-cellphone', color: 'error' },
  },
  {
    browser: 'Chrome on Android',
    device: 'Oneplus 9 Pro',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: { icon: 'mdi-android', color: 'success' },
  },
  {
    browser: 'Chrome on MacOS',
    device: 'Apple iMac',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: { icon: 'mdi-apple', color: 'secondary' },
  },
  {
    browser: 'Chrome on Windows',
    device: 'HP Spectre 360',
    location: 'Los Angeles, CA',
    recentActivity: '20 Apr 2022, 10:20',
    deviceIcon: { icon: 'mdi-microsoft-windows', color: 'primary' },
  },
  {
    browser: 'Chrome on Android',
    device: 'Oneplus 9 Pro',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: { icon: 'mdi-android', color: 'success' },
  },
]
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="Change Password">
        <VForm>
          <VCardText>
            <!-- 👉 Current Password -->
            <VRow class="mb-3">
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Current Password"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <VTextField
                  v-model="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="New Password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Confirm New Password"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <p class="text-base font-weight-medium mt-2">
              Password Requirements:
            </p>

            <ul class="d-flex flex-column gap-y-3">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <VIcon
                    size="7"
                    icon="mdi-circle"
                    class="me-3"
                  />
                </div>
                <span class="font-weight-medium">{{ item }}</span>
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn>Save changes</VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="tonal"
            >
              Reset
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Two-steps verification -->
    <VCol cols="12">
      <VCard title="Two-steps verification">
        <VCardText>
          <p class="font-weight-semibold">
            Two factor authentication is not enabled yet.
          </p>
          <p>
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
            <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Learn more.</a>
          </p>

          <VBtn>
            Enable two-factor authentication
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <VCol cols="12">
      <!-- SECTION: Create an API key -->
      <VCard title="Create an API key">
        <VRow>
          <!-- 👉 Choose API Key -->
          <VCol
            cols="12"
            md="5"
            order-md="0"
            order="1"
          >
            <VCardText>
              <VForm @submit.prevent="() => {}">
                <VRow>
                  <!-- 👉 Choose API Key -->
                  <VCol cols="12">
                    <VSelect
                      label="Choose the API key type you want to create"
                      :items="['Full Control', 'Modify', 'Read & Execute', 'List Folder Contents', 'Read Only', 'Read & Write']"
                    />
                  </VCol>

                  <!-- 👉 Name the API Key -->
                  <VCol cols="12">
                    <VTextField label="Name the API key" />
                  </VCol>

                  <!-- 👉 Create Key Button -->
                  <VCol cols="12">
                    <VBtn
                      type="submit"
                      block
                    >
                      Create Key
                    </VBtn>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    <!-- !SECTION -->
    </VCol>

    <VCol cols="12">
      <!-- SECTION: API Keys List -->
      <VCard title="API Key List &amp; Access">
        <VCardText>
          An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
        </VCardText>

        <!-- 👉 Server Status -->
        <VCardText class="d-flex flex-column gap-y-4">
          <div
            v-for="serverKey in serverKeys"
            :key="serverKey.key"
            class="bg-var-theme-background pa-4"
          >
            <div class="d-flex align-center flex-wrap mb-3">
              <h6 class="text-h6 mb-0 me-3">
                {{ serverKey.name }}
              </h6>
              <VChip
                label
                color="primary"
                size="small"
              >
                {{ serverKey.permission }}
              </VChip>
            </div>
            <p class="text-base font-weight-medium">
              <span class="me-3">{{ serverKey.key }}</span>
              <VIcon
                :size="18"
                icon="mdi-content-copy"
                class="cursor-pointer"
              />
            </p>
            <span>Created on {{ serverKey.createdOn }}</span>
          </div>
        </VCardText>
      </VCard>
      <!-- !SECTION -->
    </VCol>

    <!-- SECTION Recent Devices -->
    <VCol cols="12">
      <!-- 👉 Table -->
      <VCard title="Recent Devices">
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th scope="col">
                BROWSER
              </th>
              <th scope="col">
                DEVICE
              </th>
              <th scope="col">
                LOCATION
              </th>
              <th scope="col">
                RECENT ACTIVITIES
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="device in recentDevices"
              :key="device.recentActivity"
            >
              <td>
                <VIcon
                  start
                  :icon="device.deviceIcon.icon"
                  :color="device.deviceIcon.color"
                />
                {{ device.browser }}
              </td>
              <td>{{ device.device }}</td>
              <td>{{ device.location }}</td>
              <td>{{ device.recentActivity }}</td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>
</template>
