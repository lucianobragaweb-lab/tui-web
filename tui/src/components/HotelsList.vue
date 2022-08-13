<template>
  <div class="space-y-2">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Plaza Vilamoura</h1>
      <p class="text-sm font-medium text-gray-500">2.531 results</p>
    </div>

    <CardItem v-for="i in 3" :key="i" />

    <button type="button" class="btn">Load more offers</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CardItem from '@/components/CardItem.vue' // @ is an alias to /src

@Options({
  components: {
    CardItem
  }
})
export default class HomeView extends Vue {}
</script>
