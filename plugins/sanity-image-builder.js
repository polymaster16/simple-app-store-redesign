import imageUrlBuilder from '@sanity/image-url'

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config)
  function CreateURL(source, width = 300, height = 300) {
    return builder.image(source).width(width).height(height).url()
  }
  return {
    provide: { CreateURL }
  }
})
