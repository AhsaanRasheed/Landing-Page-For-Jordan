<template>
  <div class="flex flex-col bg-white shadow-lg rounded-lg">
    <div
      @click="toggleAccordion"
      class="flex items-center justify-between p-4 hover:cursor-pointer transition ease-in-out duration-100 transform w-full"
    >
      <div class="flex gap-4 items-center">
        <img src="/assets/question_7542557 4.png" alt="question icon" class="h-7 lg:h-10" />
        <p class="text-sm lg:text-lg font-semibold">{{ question }}</p>
      </div>
      <!-- open close icon -->
      <img
        src="/assets/chevronsmalldown.png"
        alt="chevron icon"
        v-if="isOpen"
        class="transform rotate-180 transition-transform duration-100 h-3 lg:h-4"
      />
      <img src="/assets/chevronsmalldown.png" alt="chevron icon" class="h-3 lg:h-4" v-else />
    </div>
    <!-- answer div -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="max-w-[570px] p-4 rounded-lg bg-white transition-max-height ease-in-out duration-100 overflow-hidden"
      >
        <p class="text-sm lg:text-lg">{{ answer }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
/* Add styling for the expanded accordion */
.rotate-180 {
  transform: rotate(180deg);
}

/* Add fade transition class */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
