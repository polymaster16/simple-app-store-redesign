<template>
    <div>
Abouts Page
    </div>
    <button @click="router.push('/')" type="button">Hello</button>
</template>

<script setup>
 const router = useRouter();
 const {hello} = useHello()


 hello()
 definePageMeta({
    layout: "custom",
 })

</script>

<style scoped>

</style>