<template>
   <div v-motion-slide-left class="drawer glassx">
 

<input id="my-drawer" type="checkbox" class="drawer-toggle" />
<div class="drawer-content">
 <!-- Page content here -->
 <nav class="pt-4 px-3 pb-7">
 <ul>
    <li>
      <NuxtLink to="/">
         <img class="rounded-full" width="50" src="https://cdn.midjourney.com/100de0e8-bce3-416c-a677-bb0aef0878fb/0_2.webp" alt="Logo" srcset="">
          </NuxtLink>
    </li>
 </ul>
 
 <ul v-if="!(screenType === 'mobile')" class="justify-center flex flex-row gap-4 mt-[-35px] menux">
    <li>
          <NuxtLink to="/">
             Index
          </NuxtLink>
 </li>
    <li>
       <NuxtLink to="/posts">
       About
    </NuxtLink>
 </li>
    <li>
       <NuxtLink to="/posts">
          Posts
    </NuxtLink>
        </li>
    <li>
       <NuxtLink to="/services">
           Announcements
    </NuxtLink> 
    </li>
    <li>
       <NuxtLink to="/pictures">
          Store
    </NuxtLink>
  </li>
  <li>
       <NuxtLink to="/">
          Connect
    </NuxtLink>
  </li>

 </ul>
 
 <ul  v-if="!(screenType === 'mobile')" class="text-right mr-4 mt-[-30px] flex flex-row justify-end ">
    <li class="bg-red-700 hover:bg-red-500 transition-all py-1 px-[12px] text-white rounded-full">
       <Icon :size="17" name="ant-design:user-outlined"></Icon> Login
    </li> 
 </ul>

 <ul v-if="(screenType === 'mobile')" class="justify-center flex flex-row gap-4 mt-[-40px] menux">
    <li class="text-[22px] ff font-bold">
<!-- SAS -->
  </li>

 </ul>
   
 <ul  v-if="(screenType === 'mobile')" class="text-right mr-1 mt-[-5px] flex flex-row justify-end ">
    <label for="my-drawer" class="bg-slate-800 hover:bg-slate-800 transition-all py-1 px-[10px] text-white rounded-full">
       <Icon :size="20" name="line-md:menu-fold-left"></Icon> 
       <!-- Menu -->
    </label> 
 </ul>
</nav>

 <!-- <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label> -->
</div> 
<div style="z-index: 10;" class="drawer-side">
  <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

 <ul style="z-index: 1000;" class="menu text-white p-4 w-50 min-h-full glassx1 text-base-content">
   <!-- Sidebar content here -->       <li>
       <img class="py-4 rounded-full" width="140" src="https://cdn.midjourney.com/100de0e8-bce3-416c-a677-bb0aef0878fb/0_2.webp" alt="" srcset="">
    </li>
    <li class="mt-5 font-bold text-lg ">
          <NuxtLink to="/">
             Home
          </NuxtLink>
 </li>
    <li class=" font-bold text-lg">
       <NuxtLink to="/apps">
      Apps
    </NuxtLink>
 </li>
 <li class=" font-bold text-lg">
       <NuxtLink to="/categories">
      Categories
    </NuxtLink>
 </li>
    <!-- <li v-for="x in mainstore.state.filter(x=>x._type === 'category').filter(y=>y.type === 'posts')" class=" font-bold text-lg">
       <NuxtLink :to="`/posts/${slugify(x.title)}`">
          {{ x.title.slice(0,13) }} ...
    </NuxtLink>
        </li>

        <li class=" font-bold text-lg text-red-500 ">
       <NuxtLink to="/people">
      All Personalities
    </NuxtLink>
 </li>
 <li v-for="x in mainstore.state.filter(x=>x._type === 'category').filter(y=>y.type === 'people')" class=" font-bold text-lg">
       <NuxtLink :to="`/people/${slugify(x.title)}`">
          {{ x.title.slice(0,13) }} ...
    </NuxtLink>
        </li> -->

 </ul>
</div>
</div>
 
 
 
    
 
 
 </template>
 
 <script setup>
 
 const counter = useCounterStore()
 
 const mainstore = useMainstore()
 
    // Create a reactive ref to store the screen type
const screenType = ref('');

const {slugify} = useUtils()

// Function to check the current screen type
const checkScreenType = () => {
 if (window.matchMedia('(max-width: 768px)').matches) {
   screenType.value = 'mobile';
 } else if (window.matchMedia('(max-width: 1024px)').matches) {
   screenType.value = 'tablet';
 } else {
   screenType.value = 'desktop';
 }
};

onMounted(()=>{
checkScreenType()
})
 
 </script>
 
 <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Dekko&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.glassx{
   /* From https://css.glass */
background: rgba(202, 202, 202, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
 }

 .glassx1{
   /* From https://css.glass */
background: rgba(255, 255, 255, 0.694);
box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
 }

 .ff{
   font-family: 'Poppins';
 }
 </style>