<template>
  <div>
    <div class="flex items-center lg:hidden">
      <button type="button" class="btn-hamburg" @click="toggle">
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div :class="{ 'hidden': !isOpen }" class="mobile-menu">
      <div class="mobile-menu__overlay"></div>

      <div class="mobile-menu__modal">
        <div class="mobile-menu__container">
          <div class="mobile-menu__header pt-3 pb-2">
            <div>
              <LogoComponent />
            </div>
            <button type="button" class="btn-hamburg" @click="toggle">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="mobile-menu__content">Menu content</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import LogoComponent from './LogoComponent.vue'

export default defineComponent({
  name: 'MobileMenu',
  components: {
    LogoComponent
  },
  setup () {
    const state = reactive({
      isOpen: false as boolean
    })

    return { ...toRefs(state) }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
})
</script>

<style lang="scss" scoped>
.mobile-menu {
  &__overlay {
    @apply z-20 fixed inset-0 bg-black bg-opacity-25
  }
  &__modal {
    @apply z-30 absolute top-0 right-0 max-w-none w-full p-2 transition transform origin-top
  }
  &__container {
    @apply rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200;
  }
  &__header {
    @apply flex items-center justify-between px-4 pt-3 pb-2
  }

  &__content {
    @apply px-4 py-4
  }
}
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
