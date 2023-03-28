<template>
  <header class="relative">
    <div class="xs:ml-24">
      <h1 class="pl-14 font-bold xs:pl-12">{{ fullName }}</h1>
      <div class="mt-1 pl-14 text-xs text-brandgray-400 xs:pl-12">{{ position }}</div>
      <div class="mt-2 rounded border border-brandgray-200 bg-brandyellow-300 px-4 py-2 xs:pl-12">
        <pre class="font-sans text-sm">{{ description }}</pre>
        <div class="absolute left-0 top-0 h-11 w-11 overflow-hidden rounded-full xs:h-32 xs:w-32">
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
