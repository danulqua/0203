<template>
  <header class="relative">
    <div class="ml-24">
      <div class="pl-12 font-bold">{{ fullName }}</div>
      <div class="pl-12 text-xs mt-1 text-brandgray-400">{{ position }}</div>
      <div class="bg-brandyellow-300 mt-2 pl-12 py-2 pr-2 rounded border border-brandgray-200">
        <pre class="text-sm font-sans">{{ description }}</pre>
        <div class="overflow-hidden rounded-full w-32 h-32 absolute left-0 top-0">
          <img :src="avatar" alt="user avatar" class="object-cover w-full h-full" />
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
