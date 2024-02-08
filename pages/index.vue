<template>
   <Head>
      <Title>
         Simple App Store - Home
      </Title>
      <Link rel="icon" :href="`https://cdn.midjourney.com/100de0e8-bce3-416c-a677-bb0aef0878fb/0_2.webp`"/>

   </Head>
<!--    
   <swiper :modules="[EffectCube, Autoplay]" effect="cube"
   :direction="'horizontal'"
:slides-per-view="1"
:speed="1000"
:space-between="0"
:autoplay="{ delay: 2000, disableOnInteraction: false }"
:navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
:loop="true"
:grabCursor="true"
:mousewheel="true"
:keyboard="true"

navigation
:pagination="{ clickable: true }"
:scrollbar="{ draggable: true }">

      <swiper-slide v-for="hero in mainstore.heropage">
    <div :style="`background-image: url('${CreateURL(hero.backgroundImage,500,500)}');
`" class="herox">
        <div class="bler">
    <navbar/>


    <div class="text-3xl md:text-5xl text-white mandhor font-bold text-center mt-5">
      Welcome to the simple app store
    </div>

    <div class=" mx-5 md:mx-10 mt-7 mb-1 grid grid-cols-1 md:grid-cols-2 ">

      <div>
         <img :src="CreateURL(hero.cardImage,500,400)" alt="" srcset="">
      </div>

<div class="p-4 mt-4 text-white glassx">
   <p class="text-2xl mb-2 font-bold ">{{ hero.slide_name }}</p>
   <p class="text-sm mb-4">
{{ limitCharacters(hero.description ,300) }}
   </p>
</div>

    </div>

    <div class="flex flex-row justify-center">
      <a
                class="rounded-sm mt-5 bg-orange-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/reservation"
              >
             Explore More Apps
              </a>
    </div>

    

    </div>
    </div>
   </swiper-slide>
   </swiper> -->


   
   <div class="pt-12 ">
<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
<section class="flex flex-flow gap-2">
<div class="w-[100vw]">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-slate-800 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-950 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-slate-950 focus:text-slate-950 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />

    <!--Search button-->
    <button
      class="relative z-[2] flex items-center rounded-r bg-slate-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>

<!-- <div class="">
   <Icon name="material-symbols:notifications-outline-rounded" size="37"></Icon>
</div>
<div class="">
<img style="width: 70px; height: 70%; object-fit: cover;" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="" srcset="">
</div> -->
</section>
   </div>


   
   <swiper style="overflow-x:hidden;" :modules="[EffectCube, Autoplay]" effect="cube"
   :direction="'horizontal'"
:slides-per-view="1"
:speed="2000"
:space-between="0"
:autoplay="{ delay: 2000, disableOnInteraction: false }"
:navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
:loop="true"
:grabCursor="true"
:mousewheel="true"
:keyboard="true"

navigation
:pagination="{ clickable: true }"
:scrollbar="{ draggable: true }">


   <swiper-slide style="overflow-x:hidden;" v-for="i in 5">
   <div  style="position: relative;" class="">
      <img style="width: 100%; height: 250px; object-fit: cover;" src="https://cdn.midjourney.com/e64529e0-c3ea-4598-a6f1-66bfb6954e12/0_0.webp" alt="" srcset="">
   
   <div style="z-index: 2; background-color: rgba(0, 0, 0, 0.562); position: absolute; bottom: 0%;" class="text-[18px] w-[100%] text-white p-2">Welcome to the new limited-time-5-star</div>
   </div>

   <div style="position: relative;" class="flex flex-flow pt-2 bg-slate-50">
      <img style="width: 70px; height: 70px; object-fit: cover;" src="https://cdn.midjourney.com/213905b2-fcb5-4e22-bac1-6889fcb2fb40/0_0.webp" alt="" srcset="">
      <div class="flex flex-col ml-2 pt-2">
         <p class="text-lg font-semibold">Luna Terra App</p>
         <p class="text-sm font-tin">Luna Terra App</p>
      </div>
      <div style="position: absolute; right: 0px; top: 5px;">
         <button style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">Install</button>
      </div>
   </div>
   </swiper-slide>
</swiper>

<div class="mt-7">
   <div v-for="i in 5" class="py-[2px] bg-slate-900 mb-2"></div>

</div>


<div class="text-xl font-bold mt-7">
   Recent Apps
   <div class="py-[2px] bg-slate-900 mb-2 mt-1 w-[30%]"></div>

</div>

<swiper  effect=""
   :direction="'horizontal'"
:slides-per-view="1.2"
:speed="1000"
:space-between="10"
:autoplay="{ delay: 2000, disableOnInteraction: false }"
:navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
:loop="true"
:grabCursor="true"
:mousewheel="true"
:keyboard="true"

navigation
:pagination="{ clickable: true }"
:scrollbar="{ draggable: true }">


<swiper-slide>
<div class="pt-2 pb-5 grid grid-cols-2 gap-2">
   <div v-for="app in mainstore.apps.sort((a, b) => new Date(b._createdAt ) - new Date(a._createdAt)).slice(0,6)">
   <div style="position: relative;" class="">
      <img style="width: 100%; height: 120px; object-fit: cover;" :src="CreateURL(app.maiimage)" alt="" srcset="">
   
   <!-- <div style="z-index: 2; background-color: rgba(0, 0, 0, 0.562); position: absolute; bottom: 0%;" class="text-[18px] w-[100%] text-white p-2">Welcome to the new limited-time-5-star</div> -->
   </div>

   <div style="position: relative;" class="flex flex-flow pt-2 ">
      <img style="width: 40px; height: 40px; object-fit: cover;" :src="CreateURL(app.icon)" alt="" srcset="">
      <div class="flex flex-col ml-2 ">
         <p class="text-md font-semibold">{{ app.name }}</p>
         <p class="text-xs font-thin">Category</p>
      </div>
      <!-- <div style="position: absolute; right: 0px; top: 5px;">
         <button style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">Install</button>
      </div> -->
   </div>
</div>
</div>
</swiper-slide>

<swiper-slide>
<div class="pt-2 pb-5 grid grid-cols-2 gap-2">
   <div v-for="app in mainstore.apps.sort((a, b) => new Date(b._createdAt ) - new Date(a._createdAt)).slice(7,13)">
   <div style="position: relative;" class="">
      <img style="width: 100%; height: 120px; object-fit: cover;" :src="CreateURL(app.maiimage)" alt="" srcset="">
   
   <!-- <div style="z-index: 2; background-color: rgba(0, 0, 0, 0.562); position: absolute; bottom: 0%;" class="text-[18px] w-[100%] text-white p-2">Welcome to the new limited-time-5-star</div> -->
   </div>

   <div style="position: relative;" class="flex flex-flow pt-2 ">
      <img style="width: 40px; height: 40px; object-fit: cover;" :src="CreateURL(app.icon)" alt="" srcset="">
      <div class="flex flex-col ml-2 ">
         <p class="text-md font-semibold">{{ app.name }}</p>
         <p class="text-xs font-thin">Category</p>
      </div>
      <!-- <div style="position: absolute; right: 0px; top: 5px;">
         <button style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">Install</button>
      </div> -->
   </div>
</div>
</div>
</swiper-slide>

<swiper-slide>
<div class="pt-2 pb-5 grid grid-cols-2 gap-2">
   <div v-for="app in mainstore.apps.sort((a, b) => new Date(b._createdAt ) - new Date(a._createdAt)).slice(13,20)">
   <div style="position: relative;" class="">
      <img style="width: 100%; height: 120px; object-fit: cover;" :src="CreateURL(app.maiimage)" alt="" srcset="">
   
   <!-- <div style="z-index: 2; background-color: rgba(0, 0, 0, 0.562); position: absolute; bottom: 0%;" class="text-[18px] w-[100%] text-white p-2">Welcome to the new limited-time-5-star</div> -->
   </div>

   <div style="position: relative;" class="flex flex-flow pt-2">
      <img style="width: 40px; height: 40px; object-fit: cover;" :src="CreateURL(app.icon)" alt="" srcset="">
      <div class="flex flex-col ml-2 ">
         <p class="text-md font-semibold">{{ app.name }}</p>
         <p class="text-xs font-thin">Category</p>
      </div>
      <!-- <div style="position: absolute; right: 0px; top: 5px;">
         <button style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">Install</button>
      </div> -->
   </div>
</div>
</div>
</swiper-slide>
</swiper>


<div class="mt-7">
   <div v-motion-slide-visible-bottom v-for="i in 5" class="py-[2px] bg-slate-900 mb-2"></div>

</div>


<div class="text-xl font-bold mt-7">
   Categories
   <div class="py-[2px] bg-slate-900 mb-2 mt-1 w-[30%]"></div>
</div>

<div class="flex flex-flow flex-wrap gap-2">
   <div v-for="cat in mainstore.categories  " style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">{{ cat.title }}</div>

</div>


<div class="mt-7">
   <div v-motion-slide-visible-bottom v-for="i in 5" class="py-[2px] bg-slate-900 mb-2"></div>

</div>
<div class="text-xl font-bold mt-7">
   More Apps
   <div class="py-[2px] bg-slate-900 mb-2 mt-1 w-[30%]"></div>

</div>

<div class="flex flex-col gap-2">
   <div v-for="app in mainstore.apps.sort((a, b) => new Date(a._createdAt ) - new Date(b._createdAt)).slice(0,10)" style="position: relative;" class="flex flex-flow pt-2 bg-slate-50">
      <img style="width: 70px; height: 70px; object-fit: cover;" :src="CreateURL(app.icon)" alt="" srcset="">
      <div class="flex flex-col ml-2 ">
         <p class="text-lg font-semibold">{{ app.name }}</p>
         <p class="text-xs font-thin">Category</p>
      </div>
      <div style="position: absolute; right: 0px; top: 5px;">
         <button style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">Install</button>
      </div>
   </div>
</div>


<div class="mt-10" style="background-image: url('https://cdn.midjourney.com/ee726ab7-4bd4-4a31-ac78-67417c35e530/0_0.webp');
 height: 100%; background-size: cover; background-attachment: fixed;">
 <div style="background-color: #00000092;" class="px-4 py-6 text-white">
   <h3 class="text-2xl pt-2">Join our Broadcast List</h3>
   <p class="text-md mt-2">Join our list today and stay updated about all the events happening on the platform, directly in your WhatsApp inbox. Take part in our various games and challenges for a chance to become an elite student.
   </p>
   <div class="flex flex-row justify-end mr-2 mt-2 mb-7">
      <button type="button" class="bg-red-700 text-sm hover:bg-red-500 transition-all py-1 px-[10px] text-white rounded-full">
         JOIN NOW
      </button>
   </div>
 </div>
 </div>

</template>

<script setup>
  import { EffectCube, Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/effect-cube';


  const {CreateURL, limitCharacters} = useUtils()


const mainstore = useMainstore()


</script>

<style scoped>
.herox{
width: 100%;
height: 100%;
position: relative;
background-position: bottom;
background-size: cover;
background-attachment: fixed;

}

.bler{
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.425);
    padding-bottom: 50px;
    height: 100%;
}
</style>