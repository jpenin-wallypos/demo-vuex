<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column pt-6">
          <input
            type="number"
            class="input is-large"
            v-model.number="step"
          /><button class="button" @click="incrementCounter">
            Incrementar
          </button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <span class="tag is-large is-info">Contador: {{ counter }}</span>
          <span class="tag is-large is-warning"
            >Operaciones: {{ operations }}</span
          >
          <span class="tag is-large is-warning">Loading: {{ loading }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      counter: (state) => state.counter.value,
      operations: (state) => state.counter.operations,
      loading: (state) => state.loader.isLoading,
    }),
  },
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    incrementCounter() {
      this.increment(this.step)
    },
    ...mapActions('counter', ['increment']),
  },
}
</script>
