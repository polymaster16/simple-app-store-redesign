<template>
     <Head>
      <Title>
         Simple App Store
      </Title>
      <Link rel="icon" :href="`https://cdn.midjourney.com/100de0e8-bce3-416c-a677-bb0aef0878fb/0_2.webp`"/>

   </Head>
  <div v-if="mainstore.state" >
<NuxtLayout>
  <NuxtPage>

  </NuxtPage>
</NuxtLayout>
</div>

<div v-else>Loading</div>
</template>

<script setup>
import { useMainstore } from './stores/mainstore';

const mainstore = useMainstore()


 await mainstore.fetchAll()

</script>
