<template>
  <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-12">
    <section aria-labelledby="timeline-title" class="lg:col-span-3">
      <CountryFilter />
    </section>

    <div class="space-y-2 lg:col-span-9">
      <HotelsList />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CountryFilter from '@/components/CountryFilter.vue' // @ is an alias to /src
import HotelsList from '@/components/HotelsList.vue' // @ is an alias to /src

@Options({
  components: {
    CountryFilter,
    HotelsList
  }
})
export default class HomeView extends Vue {}
</script>
