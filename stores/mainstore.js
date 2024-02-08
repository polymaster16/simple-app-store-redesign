import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainstore = defineStore('mainstore', () => {
    const client = useSanity()
    const apps = ref(0)
  const categories = ref(0)
  const publishers = ref(0)
  const heropage = ref(null)
  const state = ref(null)


  const fetchAll= async()=>{
    try {
        state.value  = 
        await client.fetch('*');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
      categories.value = state.value.filter(x=> x._type === 'category')
      apps.value = state.value.filter(x=> x._type === 'anapp')

          console.log(state.value)
      } catch (error) {
        console.log(error, 'fetching apps')
      }
  }

  const fetchApps= async()=>{
    try {
        apps.value  = 
        await client.fetch('*[_type == "anapp"]');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
          console.log(apps.value)
      } catch (error) {
        console.log(error, 'fetching apps')
      }
  }
  const fetchCategories = async()=>{
    try {
        categories.value  = 
        await client.fetch('*[_type == "category"]');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
          console.log(categories.value)
      } catch (error) {
        console.log(error, 'fetching categories')
      }
  }
  const fetchPublishers = async()=>{
    try {
        publishers.value  = 
        await client.fetch('*[_type == "publisher"]');
      //localStorage.setItem('@articles', JSON.stringify(articles.value))
          console.log(publishers.value)
      } catch (error) {
        console.log(error, 'fetching apps')
      }
  }
  
  const fetchHeroPage = async()=>{
    try {
      heropage.value = 
      await client.fetch('*[_type == "heropage"]');
      console.log(heropage.value)

    } catch (error) {
      console.log(error, 'fetching heropage')

    }
  }
return {state, fetchAll, categories, apps}
  // return { apps, categories, publishers, heropage, fetchApps, fetchCategories, fetchPublishers, fetchHeroPage, fe  }
})
