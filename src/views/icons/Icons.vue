<template>
  <div id="icons-container">
    <div class="d-flex align-center flex-wrap">
      <v-tooltip
        v-for="item in iconsList"
        :key="item.icon"
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-card
            v-bind="attrs"
            class="icons-card mb-6 me-6"
            v-on="on"
          >
            <v-card-text class="py-3 px-4">
              <v-icon size="30">
                {{ item.icon }}
              </v-icon>
            </v-card-text>
          </v-card>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip>
    </div>

    <!-- more icons -->
    <div class="text-center">
      <v-btn
        href="https://materialdesignicons.com/"
        target="_blank"
        rel="nofollow"
        color="primary"
      >
        View All Material Design Icons
      </v-btn>
    </div>
  </div>
</template>

<script>
import {
  mdiMagnify,
  mdiAbTesting,
  mdiAbacus,
  mdiAbjadArabic,
  mdiAbjadHebrew,
  mdiAbugidaDevanagari,
  mdiAbugidaThai,
  mdiAccessPoint,
  mdiAccessPointCheck,
  mdiAccessPointMinus,
  mdiAccessPointNetwork,
  mdiAccessPointNetworkOff,
  mdiAccessPointOff,
  mdiAccessPointPlus,
  mdiAccessPointRemove,
  mdiAccountAlertOutline,
  mdiAccountArrowLeftOutline,
  mdiAccountArrowRightOutline,
  mdiAccountBoxMultipleOutline,
  mdiAccountBoxOutline,
  mdiAccountCancelOutline,
  mdiAccountCashOutline,
  mdiAccountCheckOutline,
  mdiAccountChildOutline,
  mdiAccountCircleOutline,
  mdiAccountClockOutline,
  mdiAccountCogOutline,
  mdiAccountDetailsOutline,
  mdiAlarmLightOutline,
  mdiAlertBoxOutline,
  mdiAlertCircleCheckOutline,
  mdiAlertDecagramOutline,
  mdiAlertMinusOutline,
  mdiAlertOutline,
  mdiAlertPlusOutline,
  mdiCheckOutline,
  mdiClipboardOutline,
  mdiClipboardPlayOutline,
  mdiCloseOutline,
  mdiCloudCheckOutline,
  mdiCloudDownloadOutline,
  mdiCogOutline,
  mdiCompassOffOutline,
  mdiContactlessPaymentCircleOutline,
  mdiCrownOutline,
  mdiDeleteOutline,
  mdiDiamondOutline,
  mdiEmailOpenOutline,
  mdiEmoticonHappyOutline,
  mdiFileMultipleOutline,
  mdiFlaskEmptyOutline,
} from '@mdi/js'

export default {
  setup() {
    // icons list
    const iconsList = [
      { icon: mdiAbTesting, name: 'mdiAbTesting' },
      { icon: mdiAbacus, name: 'mdiAbacus' },
      { icon: mdiAbjadArabic, name: 'mdiAbjadArabic' },
      { icon: mdiAbjadHebrew, name: 'mdiAbjadHebrew' },
      { icon: mdiAbugidaDevanagari, name: 'mdiAbugidaDevanagari' },
      { icon: mdiAbugidaThai, name: 'mdiAbugidaThai' },
      { icon: mdiAccessPoint, name: 'mdiAccessPoint' },
      { icon: mdiAccessPointCheck, name: 'mdiAccessPointCheck' },
      { icon: mdiAccessPointMinus, name: 'mdiAccessPointMinus' },
      { icon: mdiAccessPointNetwork, name: 'mdiAccessPointNetwork' },
      { icon: mdiAccessPointNetworkOff, name: 'mdiAccessPointNetworkOff' },
      { icon: mdiAccessPointOff, name: 'mdiAccessPointOff' },
      { icon: mdiAccessPointPlus, name: 'mdiAccessPointPlus' },
      { icon: mdiAccessPointRemove, name: 'mdiAccessPointRemove' },
      { icon: mdiAccountAlertOutline, name: 'mdiAccountAlertOutline' },
      { icon: mdiAccountArrowLeftOutline, name: 'mdiAccountArrowLeftOutline' },
      { icon: mdiAccountArrowRightOutline, name: 'mdiAccountArrowRightOutline' },
      { icon: mdiAccountBoxMultipleOutline, name: 'mdiAccountBoxMultipleOutline' },
      { icon: mdiAccountBoxOutline, name: 'mdiAccountBoxOutline' },
      { icon: mdiAccountCancelOutline, name: 'mdiAccountCancelOutline' },
      { icon: mdiAccountCashOutline, name: 'mdiAccountCashOutline' },
      { icon: mdiAccountCheckOutline, name: 'mdiAccountCheckOutline' },
      { icon: mdiAccountChildOutline, name: 'mdiAccountChildOutline' },
      { icon: mdiAccountCircleOutline, name: 'mdiAccountCircleOutline' },
      { icon: mdiAccountClockOutline, name: 'mdiAccountClockOutline' },
      { icon: mdiAccountCogOutline, name: 'mdiAccountCogOutline' },
      { icon: mdiAccountDetailsOutline, name: 'mdiAccountDetailsOutline' },
      { icon: mdiAlarmLightOutline, name: 'mdiAlarmLightOutline' },
      { icon: mdiAlertBoxOutline, name: 'mdiAlertBoxOutline' },
      { icon: mdiAlertCircleCheckOutline, name: 'mdiAlertCircleCheckOutline' },
      { icon: mdiAlertDecagramOutline, name: 'mdiAlertDecagramOutline' },
      { icon: mdiAlertMinusOutline, name: 'mdiAlertMinusOutline' },
      { icon: mdiAlertOutline, name: 'mdiAlertOutline' },
      { icon: mdiAlertPlusOutline, name: 'mdiAlertPlusOutline' },
      { icon: mdiCheckOutline, name: 'mdiCheckOutline' },
      { icon: mdiClipboardOutline, name: 'mdiClipboardOutline' },
      { icon: mdiClipboardPlayOutline, name: 'mdiClipboardPlayOutline' },
      { icon: mdiCloseOutline, name: 'mdiCloseOutline' },
      { icon: mdiCloudCheckOutline, name: 'mdiCloudCheckOutline' },
      { icon: mdiCloudDownloadOutline, name: 'mdiCloudDownloadOutline' },
      { icon: mdiCogOutline, name: 'mdiCogOutline' },
      { icon: mdiCompassOffOutline, name: 'mdiCompassOffOutline' },
      { icon: mdiContactlessPaymentCircleOutline, name: 'mdiContactlessPaymentCircleOutline' },
      { icon: mdiCrownOutline, name: 'mdiCrownOutline' },
      { icon: mdiDeleteOutline, name: 'mdiDeleteOutline' },
      { icon: mdiDiamondOutline, name: 'mdiDiamondOutline' },
      { icon: mdiEmailOpenOutline, name: 'mdiEmailOpenOutline' },
      { icon: mdiEmoticonHappyOutline, name: 'mdiEmoticonHappyOutline' },
      { icon: mdiFileMultipleOutline, name: 'mdiFileMultipleOutline' },
      { icon: mdiFlaskEmptyOutline, name: 'mdiFlaskEmptyOutline' },
    ]

    return {
      iconsList,
      icons: {
        mdiMagnify,
      },
    }
  },
}
</script>
