<template>
  <section class="my-6 text-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <h2 class="font-bold">Latest reviews</h2>
        <a
          href="#all-reviews"
          class="text-brandblue-900 underline outline-none ring-brandblue-900 ring-offset-1 focus:ring-2"
        >
          All reviews
        </a>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-1">
          <IconLike class="h-3 w-3" />
          <span>131</span>
        </div>
        <div class="flex items-center space-x-1">
          <IconComment class="h-3 w-3" />
          <span>14</span>
        </div>
      </div>
    </div>

    <TransitionGroup
      tag="ul"
      class="mt-3 space-y-4"
      enter-active-class="transition-all ease-in-out duration-700"
      leave-active-class="transition-all ease-in-out duration-700"
      enter-from-class="-translate-x-10 opacity-0"
      leave-to-class="-translate-x-10 opacity-0"
    >
      <UserReview
        v-for="review in data"
        :key="review.id"
        :user="review.user"
        :date="review.date"
        :text="review.text"
      />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { type PropType, defineProps } from 'vue';
import type { Review } from '@/data/types';

import IconLike from '@/components/icons/IconLike.vue';
import IconComment from '@/components/icons/IconComment.vue';
import UserReview from '@/components/UserReview.vue';

defineProps({
  data: {
    type: Array as PropType<Review[]>,
    required: true
  }
});
</script>
