<template>
  <div
    class="w-[135px] h-[135px] md:w-[180px] md:h-[180px] lg:w-[180px] lg:h-[180px] flex flex-col gap-2 bg-white justify-center items-center md:p-4 lg:p-4 rounded-full overflow-hidden shadow-lg"
  >
    <img :src="image" alt="image1" class="w-14 h-14 lg:w-18 lg:h-18" />
    <p class="text-xs md:text-sm lg:text-sm px-3 w-full lg:max-w-[80%] text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
