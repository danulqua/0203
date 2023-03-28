<template>
  <div class="xs:ml-36 mt-4">
    <div class="mr-6 text-right text-sm">Services</div>
    <div class="mt-2 border-y border-brandgray-200 py-4 text-sm">
      <div class="relative space-y-1">
        <div v-for="(service, idx) in sortedServices" :key="service.id">
          <div class="flex items-center justify-between">
            <div class="relative flex-1">
              <span class="flex py-1 items-center px-2">{{ service.title }}</span>
              <div
                class="absolute inset-y-0 -z-10 rounded-r"
                :class="idx === 0 ? 'bg-brandgreen-700' : 'bg-brandblue-700'"
                :style="`width: ${servicesBarsLengths[idx]}%`"
              ></div>
            </div>
            <div class="w-24 text-center font-bold">{{ service.count }}</div>
          </div>
          <div class="w-[2px] inset-y-0 left-0 absolute bg-brandgray-50"></div>
        </div>
      </div>
    </div>
    <div class="mt-2 font-bold flex items-center justify-between">
      <span>Total</span>
      <span class="w-24 text-center">{{ totalServices }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, defineProps, computed } from 'vue';
import type { UserService } from '@/data/types';

const props = defineProps({
  data: {
    type: Array as PropType<UserService[]>,
    required: true
  }
});

const sortedServices = computed(() => [...props.data].sort((a, b) => b.count - a.count));
const totalServices = computed(() =>
  sortedServices.value.reduce((acc, curr) => acc + curr.count, 0)
);
const servicesBarsLengths = computed(() => {
  const max = sortedServices.value[0].count;
  return sortedServices.value.map((service) => (service.count / max) * 100);
});
</script>
