<template>
  <div>
    <div class="flex items-center lg:hidden">
      <button type="button" class="btn-hamburg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div class="hidden">
      <div class="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

      <div class="
              z-30
              absolute
              top-0
              right-0
              max-w-none
              w-full
              p-2
              transition
              transform
              origin-top
            ">
        <div class="
                rounded-lg
                shadow-lg
                ring-1 ring-black ring-opacity-5
                bg-white
                divide-y divide-gray-200
              ">
          <div class="pt-3 pb-2">
            <div class="flex items-center justify-between px-4">
              <div>
                <LogoComponent />
              </div>
              <div class="-mr-2">
                <button type="button" class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-blue-500
                      ">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="px-4 py-4">Menu content</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LogoComponent from './LogoComponent.vue'

@Options({
  components: {
    LogoComponent
  }
})
export default class MobileMenu extends Vue {}
</script>

<style lang="scss" scoped>
.btn-hamburg {
  @apply inline-flex items-center justify-center p-2 rounded-md text-gray-400;

  &:hover {
    @apply text-gray-500 bg-gray-100
  }

  &:focus {
    @apply outline-none ring-2 ring-inset ring-blue-500;
  }
}
</style>
