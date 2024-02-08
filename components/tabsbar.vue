<template>
    <div v-motion-slide-left class="glassx flex flex-row gap-[13vw] md:gap-[6vw] justify-center py-4">
        <div>
                     <Icon size="30" name="ant-design:home-outlined"></Icon>
        </div>
        <div>
                     <Icon size="30" name="ant-design:bell-outlined"></Icon>
                  </div>

                  <div>
                     <Icon size="30" name="ant-design:usergroup-add-outlined"></Icon>
                  </div>
                  <div>
                     <Icon size="25" name="ant-design:shop-outlined"></Icon>
                  </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.glassx{
   /* From https://css.glass */
background: rgba(202, 202, 202, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
 }

</style>