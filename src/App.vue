<script setup lang="ts">
import { ref } from 'vue';
import type { Review } from '@/data/types';
import ProfileBio from '@/components/ProfileBio.vue';
import UserServices from '@/components/UserServices.vue';
import LatestReviews from '@/components/LatestReviews.vue';
import AddReviewForm from '@/components/AddReviewForm.vue';

import { bio, userServices } from '@/data';

const user = {
  id: 98765,
  username: 'Antagasoft Admin'
};

const latestReviews = ref<Review[]>([
  {
    id: 1,
    user: 'Samuel Jackson',
    text: "Hey Eva! You're cool. Nice pic!",
    date: '2022-03-13'
  },
  {
    id: 2,
    user: 'Angela Deimon',
    text: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
    date: '2022-03-10'
  },
  {
    id: 3,
    user: 'Ronald Harris',
    text: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
    date: '2022-03-08'
  }
]);

const addReview = (reviewText: string) => {
  const newReview: Review = {
    id: latestReviews.value.length + 1,
    user: user.username,
    text: reviewText,
    date: new Date().toISOString().split('T')[0]
  };

  latestReviews.value = [newReview, ...latestReviews.value];
};
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
    <LatestReviews :data="latestReviews" />
    <AddReviewForm @add-review="addReview" />
  </main>
</template>
