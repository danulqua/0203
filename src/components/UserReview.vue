<template>
  <li>
    <div class="flex items-center space-x-2">
      <h3 class="font-bold">{{ user }}</h3>
      <span class="text-xs text-brandgray-400">{{ formatDate(new Date(date)) }}</span>
    </div>

    <div
      class="relative mt-3 border border-brandgray-300 bg-brandblue-100 p-5 shadow-xl shadow-brandgray-10"
    >
      {{ text }}
      <svg class="absolute left-6 top-0 h-3 w-3 -translate-y-full">
        <path
          d="M 0 100 L 0 0 L 100 100"
          class="fill-brandblue-100 stroke-brandgray-300"
          stroke-width="1"
        />
      </svg>
    </div>
  </li>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/formatDate';

defineProps({
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>
