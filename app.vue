<template>
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
