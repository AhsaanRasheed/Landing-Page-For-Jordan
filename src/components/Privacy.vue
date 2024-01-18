<template>
  <div>
    <h2 class="text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14">We care about privacy</h2>
    <div class="mb-8 flex flex-col gap-4 items-center lg:justify-end relative">
      <div
        class="h-32 w-32 lg:h-48 flex justify-center items-center lg:w-48 bg-white rounded-full lg:absolute lg:-top-10 lg:left-[43%] shadow-lg"
      >
        <img src="/assets/user_12986669 1.png" alt="privacy circle" class="h-16 lg:h-24" />
      </div>
      <div
        class="bg-[#54098E] flex flex-col justify-center lg:justify-end items-center w-full lg:w-2/3 gap-8 h-60 lg:h-[350px] lg:rounded-lg"
      >
        <div class="flex flex-col justify-center gap-8 h-[200px] w-3/4">
          <h1 class="text-xl lg:text-4xl font-bold text-center text-white">
            Ready to get started?
          </h1>
          <button
            type="submit"
            class="bg-[#B247EA] bg-opacity-50 rounded-md p-4 text-white text-xl lg:text-2xl font-bold w-full shadow-lg"
          >
            Build yours for free
          </button>
        </div>
      </div>
      <div
        class="absolute top-[180px] left-[3%] lg:top-8 lg:left-[18%] xl:top-8 xl:left-[18%] bg-white bg-opacity-10 rounded-full h-14 w-14 lg:h-24 lg:w-24 xl:h-32 xl:w-32 shadow-lg"
      ></div>
      <div
        class="absolute top-[10rem] left-[80%] lg:top-8 lg:left-[68%] xl:top-8 xl:left-[67%] bg-white bg-opacity-10 rounded-full w-24 h-24 lg:h-40 lg:w-40 xl:h-48 xl:w-48 shadow-lg"
      ></div>
      <div
        class="absolute top-[14rem] left-[18%] lg:top-[10rem] lg:left-[26%] bg-white bg-opacity-10 rounded-full h-7 w-7 lg:h-12 lg:w-12 xl:h-16 xl:w-16 shadow-lg"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy",
};
</script>
