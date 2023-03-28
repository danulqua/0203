<template>
  <header class="relative">
    <div class="ml-24">
      <div class="pl-12 font-bold">{{ fullName }}</div>
      <div class="mt-1 pl-12 text-xs text-brandgray-400">{{ position }}</div>
      <div class="mt-2 rounded border border-brandgray-200 bg-brandyellow-300 py-2 pl-12 pr-2">
        <pre class="font-sans text-sm">{{ description }}</pre>
        <div class="absolute left-0 top-0 h-32 w-32 overflow-hidden rounded-full">
          <img :src="avatar" alt="user avatar" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import avatar from '@/assets/img/avatar.jpg';

defineProps({
  fullName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>
