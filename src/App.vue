<script setup lang="ts">
import ProfileBio from '@/components/ProfileBio.vue';
import UserServices from '@/components/UserServices.vue';

import { bio, userServices } from '@/data';
</script>

<template>
  <main class="mx-auto mt-4 max-w-[720px] px-4 text-branddark-900">
    <ProfileBio
      :full-name="bio.fullName"
      :position="bio.position"
      :description="bio.desciription"
      :avatar="bio.avatar"
    />
    <UserServices :data="userServices" />
  </main>
</template>
