<script setup lang="ts">
import ProfileBio from '@/components/ProfileBio.vue';

import { bio } from '@/data';
</script>

<template>
  <main class="text-branddark-900 mx-auto px-4 mt-4 max-w-[720px]">
    <ProfileBio
      :full-name="bio.fullName"
      :position="bio.position"
      :description="bio.desciription"
      :avatar="bio.avatar"
    />
  </main>
</template>
