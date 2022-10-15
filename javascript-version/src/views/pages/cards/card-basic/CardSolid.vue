<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'
import avatar8 from '@/assets/images/avatars/avatar-8.png'

const solidCardData = [
  {
    cardBg: '#16B1FF',
    title: 'Twitter Card',
    icon: 'mdi-twitter',
    text: '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
    avatarImg: avatar4,
    avatarName: 'Mary Vaughn',
    likes: '1.2k',
    share: '80',
  },
  {
    cardBg: '#3B5998',
    title: 'Facebook Card',
    icon: 'mdi-facebook',
    text: 'You\'ve read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an.',
    avatarImg: avatar1,
    avatarName: 'Eugene Clarke',
    likes: '3.2k',
    share: '49',
  },
  {
    cardBg: '#007BB6',
    title: 'Linkedin Card',
    icon: 'mdi-linkedin',
    text: 'With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.',
    avatarImg: avatar8,
    avatarName: 'Anne Burke1',
    likes: '1.2k',
    share: '80',
  },
]
</script>

<template>
  <VRow>
    <VCol
      v-for="data in solidCardData"
      :key="data.icon"
      cols="12"
      md="6"
      lg="4"
    >
      <VCard :color="data.cardBg">
        <VCardItem>
          <template #prepend>
            <VIcon
              size="1.9rem"
              color="white"
              :icon="data.icon"
            />
          </template>
          <VCardTitle class="text-white">
            {{ data.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="text-white">
          {{ data.text }}
        </VCardText>

        <VCardText class="d-flex justify-space-between align-center flex-wrap">
          <div class="text-no-wrap">
            <VAvatar
              size="34"
              :image="data.avatarImg"
            />
            <span class="text-white ms-2">{{ data.avatarName }}</span>
          </div>

          <div>
            <VIcon
              icon="mdi-heart"
              color="white"
              size="1.2rem"
              class="me-2 cursor-pointer"
            />
            <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>

            <VIcon
              icon="mdi-share-variant"
              color="white"
              size="1.2rem"
              class="me-2 cursor-pointer"
            />
            <span class="text-subtitle-2 text-white">{{ data.share }}</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
