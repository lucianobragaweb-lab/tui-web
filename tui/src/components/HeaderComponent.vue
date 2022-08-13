<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <LogoComponent />
        <MobileMenu />
      </div>
    </div>

    <div class="mx-auto">
      <div class="border-t border-gray-200 py-3">
        <div class="flex items-center justify-center px-2">
          <div class="max-w-3xl flex-1">
            <label for="search" class="sr-only">Find a hotel</label>
            <div class="relative">
              <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                ">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="search" name="search" class="search-input" placeholder="Find a hotel" type="search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MobileMenu from '@/components/MobileMenu.vue' // @ is an alias to /src
import LogoComponent from '@/components/LogoComponent.vue'

@Options({
  components: {
    MobileMenu,
    LogoComponent
  }
})
export default class HeaderComponent extends Vue {}
</script>

<style lang="scss" scoped>
.search-input {
  @apply block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 sm:text-sm;
  &:focus {
    @apply placeholder-gray-400 ring-1 ring-blue-600 border-blue-600 outline-none;
  }
}
</style>
