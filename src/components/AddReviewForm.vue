<template>
  <form @submit.prevent="addReview(reviewText)">
    <textarea
      id="text"
      ref="textareaRef"
      v-model.trim="reviewText"
      name="text"
      class="h-16 w-full resize-none scroll-py-2 overflow-y-auto rounded border border-black px-5 py-2 text-sm outline-none ring-brandyellow-900 ring-offset-2 focus:ring-2"
      @keydown.meta.enter="addReview(reviewText)"
      @keydown.ctrl.enter="addReview(reviewText)"
    ></textarea>
    <button
      type="submit"
      class="mx-auto mt-6 flex h-11 w-72 items-center justify-center rounded-full bg-brandyellow-900 font-pt-sans font-bold outline-none ring-brandyellow-900 ring-offset-2 focus:ring-2"
    >
      Send a message
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToast, POSITION } from 'vue-toastification';

const reviewText = ref('');
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const toast = useToast();

const emit = defineEmits(['add-review']);
const addReview = (text: string) => {
  if (!text) {
    return toast.error('Error! Please enter a review text.', {
      position: POSITION.BOTTOM_RIGHT
    });
  }

  emit('add-review', text);
  reviewText.value = '';
  textareaRef.value?.blur();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
