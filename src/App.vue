<template>
  <div class="min-h-full">
    <HeaderComponent />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent
  }
})

</script>
