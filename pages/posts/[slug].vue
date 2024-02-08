<template>
    <div class="mx-5">
    <div>
  {{ route.params.slug }}
    </div>

    <h1 class=" text-xl font-bold">{{ article.title }}</h1>
    <img class="mt-3" :src="CreateURL(article.mainImage, 500, 500)" alt="" srcset="">
    <!-- <SanityImage
    :asset-id="article.mainImage.asset._ref"
    auto="format"
    height="800px"
  /> -->

  <div class="my-4 blockstyle">
           <SanityContent :blocks="article.body" :serializers="serializers"  /> 

          </div>



</div>
</template>

<script setup>
import {useMainstore} from '~/stores/mainstore.js'
const route = useRoute()

const mainstore = useMainstore()

const {CreateURL} = useUtils()

const article = mainstore.articles.filter(x=> x.slug.current === route.params.slug)[0]

const serializers = { 
  types: {
    image: (data) => {
      return h("img", { src: CreateURL(data,1200,700) });
    },

  },
};

useHead(
   { 
    title: article.title,
    meta: [
    { property: 'og:title', content: article.title },
        { property: 'og:description', content: article.description },
        { property: 'og:image', content: CreateURL(article.mainImage) },
        { property: 'og:url', content: window.location.href },
    ],
}
)

</script>

<style lang="scss" scoped>

</style>