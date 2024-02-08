<template>
 
<div class="text-3xl font-bold mt-10 ">
   Categories
   <div class="py-[2px] bg-slate-900 mb-2 mt-2 w-[35%]"></div>
</div>

<div class="flex flex-flow flex-wrap gap-2 mt-4">
   <div v-for="cat in mainstore.categories  " style="border-width: 2px; border-color: rgb(52, 52, 52); " class="px-2 py-1 font-semibold rounded-sm" type="button">{{ cat.title }}</div>

</div>


<div class="mt-7">
   <div v-for="i in 50" class="py-[2px] bg-slate-900 mb-2"></div>

</div>
</template>

<script setup>
 const mainstore = useMainstore()
</script>

<style lang="scss" scoped>

</style>