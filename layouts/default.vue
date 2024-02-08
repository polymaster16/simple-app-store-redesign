<template>
    <div data-theme="light" class=" bg-slate-100">
        <div style="position: fixed; width: 100%; z-index: 20;">
            <Navbarx></Navbarx>
    </div>
<div class="px-5 pt-14 md:px-[20vw]">
    <slot><!-- optional fallback --></slot>    

</div>
<div style="position: fixed; width: 100%; z-index: 20; bottom: 0;">
    <Tabsbar></Tabsbar>
    </div>
    </div>

</template>


<script setup>

</script>


<style lang="scss" scoped>

</style>