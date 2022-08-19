<template>
  <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-12">
    <section aria-labelledby="timeline-title" class="lg:col-span-3">
      <CountryFilter />
      <button @click="increment">OK {{ count() }}</button>
    </section>

    <div class="space-y-2 lg:col-span-9">
      <HotelsList :hotelsList="hotels" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import CountryFilter from '../../components/CountryFilter.vue' // @ is an alias to /src
import HotelsList from '../../components/HotelsList.vue' // @ is an alias to /src
import Product from '../../types/Product'
import products from '../../api/products.json'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',
  components: {
    CountryFilter,
    HotelsList
  },
  setup () {
    const store = useStore()
    const hotels = ref(products)

    const count = () => computed(() => store.state.counter)

    console.log(store.state.counter)

    const increment = () => store.commit('increment')

    return { hotels, increment, count }
  },
  mounted () {
    console.log('aqui')
  }
})
</script>
