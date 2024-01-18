<template>
  <!-- FORM -->
  <div class="flex items-center flex-col-reverse md:flex-row lg:flex-row mb-8 xl: p-8">
    <div class="w-full">
      <div
        class="lg:w-[60%] md:w-[70%] flex flex-col justify-center items-center md:items-start lg:items-start gap-4"
      >
        <h1 class="text-3xl lg:text-4xl font-bold lg:font-bold">Get your business online</h1>
        <h2 class="text-lg lg:text-2xl font-normal">We'll build your website for free</h2>
        <form class="flex flex-col gap-3 w-[100%]">
          <input
            type="text"
            name="name"
            id="name"
            class="rounded-md p-3 shadow-md border-2 border-gray-300"
            placeholder="your name..."
          />
          <input
            type="email"
            name="email"
            id="email"
            class="rounded-md p-3 shadow-md border-2 border-gray-300"
            placeholder="your email..."
          />
          <button type="submit" class="bg-[#54098E] rounded-md p-4 text-white text-xl font-bold">
            Build yours for free
          </button>
        </form>
      </div>
    </div>
    <div class="md:w-2/3 lg:w-2/3">
      <img
        src="/assets/illustration 1.png"
        alt="business"
        class="w-[250px] h-[250px] md:w-[330px] md:h-[330px] lg:w-[500px] lg:h-[500px]"
      />
    </div>
  </div>

  <!-- WHAT WE OFFER -->
  <div class="flex flex-col items-center gap-4 lg:gap-8 mb-12">
    <h2 class="md:text-3xl lg:text-4xl font-bold text-2xl">What we offer?</h2>
    <div class="flex flex-wrap justify-center gap-8 p-4 w-full lg:w-3/4">
      <service-card text="Save development cost" :image="image1" />
      <service-card text="No Need to Learn Code" :image="image2" />
      <service-card text="Unlimited Revisions" :image="image3" />
      <service-card text="Simple licensing fee" :image="image4" />
      <service-card text="Free hosting included" :image="image5" />
      <service-card text="Technical support and maintenance" :image="image6" />
    </div>
  </div>

  <!-- FREQUENTLY ASKED QUESTIONS -->
  <faq />

  <!-- PRIVACY -->
  <privacy />
</template>

<style></style>

<script>
import image1 from "/assets/reduction_10271552 1.png";
import image2 from "/assets/coding_2092395 1.png";
import image3 from "/assets/domain_1116322 1.png";
import image4 from "/assets/certificate_8886253 1.png";
import image5 from "/assets/database_4199954 1.png";
import image6 from "/assets/setting_6665859 1.png";

import ServiceCard from "./servicecard.vue";
import Privacy from "./Privacy.vue";
import Faq from "./Faq.vue";
export default {
  name: "AppBody",
  components: {
    ServiceCard,
    Faq,
    Privacy,
  },
  data() {
    return {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
    };
  },
};
</script>
