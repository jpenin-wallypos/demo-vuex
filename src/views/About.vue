<template>
  <div class="container">
    <div class="pageloader" v-if="loading">
      <span class="title">Cargando...</span>
    </div>
    <div class="columns">
      <div class="column">
        <button class="button is-large" @click="simulateAsync">Load</button>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('loader')

export default {
  computed: {
    ...mapState({
      loading: (state) => state.isLoading,
    }),
  },
  methods: {
    ...mapActions(['simulateAsync']),
  },
}
</script>
