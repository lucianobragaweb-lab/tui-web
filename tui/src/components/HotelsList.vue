<template>
  <div class="hotels-list">
    <div>
      <h1 class="hotels-list__title">Plaza Vilamoura</h1>
      <p class="hotels-list__subtitle">2.531 results</p>
    </div>

    <CardItem v-for="item in hotelsList" :key="item.amount" :item="item" />

    <button type="button" class="btn">Load more offers</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import CardItem from '../components/CardItem.vue' // @ is an alias to /src
import Product from '../types/Product'

export default defineComponent({
  name: 'HotelsList',
  components: {
    CardItem
  },
  props: {
    hotelsList: Object as () => Product[]
  }
})
</script>

<style lang="scss" scoped>
.hotels-list {
  @apply space-y-2;

  &__title {
    @apply text-2xl font-bold text-gray-900;
  }

  &__subtitle {
    @apply text-sm font-medium text-gray-500
  }
}
</style>
