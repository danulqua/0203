<script setup lang="ts">
import ProfileBio from '@/components/ProfileBio.vue';
import UserServices from '@/components/UserServices.vue';

import { bio, userServices } from '@/data';
</script>

<template>
  <main class="text-branddark-900 mx-auto px-4 mt-4 max-w-[720px]">
    <ProfileBio
      :full-name="bio.fullName"
      :position="bio.position"
      :description="bio.desciription"
      :avatar="bio.avatar"
    />
    <UserServices :data="userServices" />
  </main>
</template>
