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
          <SearchComponent/>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MobileMenu from '@/components/MobileMenu.vue' // @ is an alias to /src
import LogoComponent from '@/components/LogoComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

@Options({
  components: {
    MobileMenu,
    LogoComponent,
    SearchComponent
  }
})
export default class HeaderComponent extends Vue {}
</script>
