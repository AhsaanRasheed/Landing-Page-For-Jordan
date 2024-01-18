<template>
  <div class="flex flex-col">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
      Frequently Asked Questions
    </h2>
    <div class="flex justify-between flex-col lg:flex-row p-6 lg:p-16">
      <img
        src="/assets/faq illustration 1.png"
        alt="faq image"
        class="h-[220px] w-[220px] lg:w-[400px] lg:h-[400px] self-center"
      />
      <div class="flex flex-col lg:w-3/6 gap-2 lg:gap-4 mt-4">
        <accordion
          v-for="(item, index) in faqItems"
          :key="index"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  name: "Faq",
  components: {
    Accordion,
  },
  data() {
    return {
      faqItems: [
        {
          question: "Can you include contact forms?",
          answer:
            "Yes, each website can feature a contact form which we will integrate with your domain name.",
        },
        {
          question: "Do you host the website?",
          answer: "Yes, websites are hosted on our servers.",
        },
        {
          question: "Can you build a custom web application?",
          answer: "Yes, we can build a custom web application for you.",
        },
        {
          question: "What if I want to cancel?",
          answer: "You can cancel at any time.",
        },
        {
          question: "What do you mean by free?",
          answer:
            "Most website development companies charge thousands of dollars to build a website. We build websites for free and charge a small monthly licensing fee.",
        },
        {
          question: "How much is the licensing fee?",
          answer:
            "For content only websites the licensing fee is $99 per month. This includes hosting, revisions, maintenance, and technical support. If you have more complex needs we can certainly take care of you.",
        },
        {
          question: "How soon can you build my website?",
          answer: "We typically deliver websites within 1 week.",
        },
        {
          question: "What if I don't like the website you build?",
          answer:
            "We offer unlimited revisions. We will work with you until you are completely satisfied with your website.",
        },
      ],
    };
  },
};
</script>
