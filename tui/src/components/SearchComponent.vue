<template>
  <div class="search">
    <div class="search__icon">
      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg>
    </div>
    <input v-model="keyword" class="search__input" placeholder="Find a hotel" type="search" @input="find()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import Product from '../types/Product'

export default defineComponent({
  name: 'SearchComponent',
  components: {},
  setup () {
    const state = reactive({
      keyword: '' as string,
      products: [] as Product[]
    })

    return { ...toRefs(state) }
  },
  methods: {
    find () {
      if (this.keyword.length > 2) {
        console.log(this.keyword)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.search {
  @apply max-w-3xl flex-1 relative;
  &__input {
    @apply block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 sm:text-sm;

    &:focus {
      @apply placeholder-gray-400 ring-1 ring-blue-600 border-blue-600 outline-none;
    }
  }
  &__icon {
    @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none
  }
}

</style>
