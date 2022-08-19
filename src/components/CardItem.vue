<template>
  <div class="card">
    <img class="card__image" src="@/assets/img/hotel.png" alt="">
    <div class="card__content">
      <h5 class="card__title">{{ item?.hotelName }}</h5>
      <p class="card__subtitle">Description </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import Product from '../types/Product'

export default defineComponent({
  name: 'CardItem',
  props: {
    item: Object as () => Product
  }
})
</script>

<style lang="scss" scoped>
.card {
  @apply flex flex-col items-center bg-white rounded-md border md:flex-row;

  &__image {
    @apply object-cover w-full h-96 rounded-t-md md:h-auto md:w-64 md:rounded-none md:rounded-l-md
  }

  &__content {
    @apply flex flex-col justify-between p-4 leading-normal
  }
  &__title {
    @apply mb-2 text-2xl font-bold tracking-tight text-gray-900;
  }

  &__subtitle {
    @apply mb-3 font-normal text-gray-700;
  }
}
</style>
