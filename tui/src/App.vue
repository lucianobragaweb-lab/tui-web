<template>
  <div class="min-h-full">
    <HeaderComponent />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HeaderComponent from '@/components/HeaderComponent.vue' // @ is an alias to /src

@Options({
  components: {
    HeaderComponent
  }
})
export default class App extends Vue { }
</script>

<style lang="scss" src="@/assets/scss/app.scss"/>
